<template>
  <v-navigation-drawer v-model="drawer" color="#223e6d" width="80">
    <v-list class="text-center" style="margin-top: 80px">
      <v-list-item link to="/home" class="mb-5">
        <v-list-item-icon>
          <v-icon size="30">mdi-home</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item link to="/board" class="mb-5">
        <v-list-item-icon>
          <svg-icon type="mdi" :path="path" width="30" height="30"></svg-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item link to="/dm" class="mb-5">
        <v-list-item-icon>
          <v-icon size="30">mdi-email</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item link to="/bell" class="mb-5">
        <v-list-item-icon>
          <v-icon size="30">mdi-bell</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item link to="/plan" class="mb-5">
        <v-list-item-icon>
          <svg-icon
            type="mdi"
            :path="boxPath"
            width="30"
            height="30"
          ></svg-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item link to="/notice" class="mb-5" style="margin-top: 250px">
        <v-list-item-icon>
          <svg-icon
            type="mdi"
            :path="LightPath"
            width="30"
            height="30"
          ></svg-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item link to="/cog" class="mb-5">
        <v-list-item-icon>
          <svg-icon
            type="mdi"
            :path="cogPath"
            width="30"
            height="30"
          ></svg-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item link to="/user" class="mb-5">
        <v-list-item-icon>
          <svg-icon
            type="mdi"
            :path="userPath"
            width="30"
            height="30"
          ></svg-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiBulletinBoard } from "@mdi/js";
import { mdiTextBoxMultiple } from "@mdi/js";
import { mdiAlarmLight } from "@mdi/js";
import { mdiCog } from "@mdi/js";
import { mdiAccountCircle } from "@mdi/js";

export default {
  name: "MyComponent",
  components: {
    SvgIcon,
  },
  setup() {
    const drawer = ref(null);

    return {
      path: mdiBulletinBoard,
      boxPath: mdiTextBoxMultiple,
      LightPath: mdiAlarmLight,
      cogPath: mdiCog,
      userPath: mdiAccountCircle,
      drawer,
    };
  },
};
</script>
<style></style>
