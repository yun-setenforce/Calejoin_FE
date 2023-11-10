<template>
  <v-main>
    <div id="loginBg" :style="{backgroundImage : `url(${bgImg})`}">

    </div>
    <div id="loginPg">
      <div id="loginForm">
        <div class="loginTitle">
          <h4>LOGIN</h4>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script setup>

function getImageUrl() {
  const i= Math.floor(Math.random()*7);
  console.log(i);
  return new URL('/images/login_bg'+i+'.webp', import.meta.url).href;
}
const bgImg = getImageUrl();
</script>
<style scoped>
@media (max-width: 768px) {

  #loginForm{
    width: 100vw;
    height:100vh;
  }
  .loginTitle{
    width:100vw;
  }

}

@media (min-width: 768px) {

  #loginForm{
    border-radius: 75px;
    border: 2px solid #fff;
    box-sizing: content-box;
    width: 450px;
    height: 700px;
    margin: 0 auto;
  }
  .loginTitle{
    border-radius: 75px 75px 0 0;
    width: 450px;
  }
}

#loginPg{
  height: 100vh;
  background:rgba(0,0,0,0.4);
  position:relative;

}
#loginBg{
  width: 100%;
  height: 100vh;
  content: "";
  overflow: hidden;
  margin:0;
  background-repeat:no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  position:absolute;
  top:0;
  left:0;
}
#loginForm{
  background-color:rgba(255, 255, 255, 0.4);
}
.loginTitle{

  background-color: rgba(255, 255, 255, 0.2);
  height: 120px;
  color:white;
}
.loginTitle > h4{
  font-size: 63px;
  letter-spacing: 6.3px;
  font-family: Lato;
  text-align: center;
  line-height: 120px;
}


</style>

