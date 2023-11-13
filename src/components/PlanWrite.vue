<script setup>

</script>

<template>
  <v-app>
    <v-container style="background: #fffdfa">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <p style="margin-top: 25%; font-size: 25px; font-family: '맑은 고딕'; font-weight: bold; letter-spacing: -2px; "  >일정 입력하기</p>
          <p class="smallTitle">제목</p>
          <input type="text" style="background: white; margin-top: 1.3%; border: solid 1px darkgrey ; width: 100%; border-radius: 5px; padding: 8px; " placeholder="일정 제목 입력...">
          <p class="smallTitle" >카테고리</p>
          <select type="text" style="background: white; margin-top: 1.3%; border: solid 1px darkgrey ; width: 25%; border-radius: 5px; padding: 8px;">
            <option>데이터출력~</option>
            <option>데이터출력~</option>
          </select>

        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.smallTitle {
  margin-top: 1.5%;
  font-size: 15px;
  color: grey;
  font-weight: bold;

}
</style>
