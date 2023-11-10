<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiFolderOpen } from "@mdi/js";
import { mdiTag } from "@mdi/js";
import { mdiFormatListChecks } from "@mdi/js";
import { mdiPin } from "@mdi/js";
import { mdiPencilPlus } from "@mdi/js";
import { ref } from "vue";

const mdiFolderOpenPath = mdiFolderOpen;
const mdiTagPath = mdiTag;
const mdiFormatListChecksPath = mdiFormatListChecks;
const mdiPinPath = mdiPin;
const mdiPencilPlusPath = mdiPencilPlus;

const toggle = ref(false); // 초기 상태 (false: 꺼짐, true: 켜짐)

const showCardContents = ref(true);

const showCardContents2 = ref(false);

const toggleCard = () => {
  showCardContents.value = !showCardContents.value; // 카드 내용 토글
};
const toggleCard2 = () => {
  showCardContents2.value = !showCardContents2.value; // 카드 내용 토글
};
</script>
<template>
  <div>
    <v-switch v-model="toggle" label="Calendar"></v-switch>
  </div>
  <p class="custom-font">NAME's</p>
  <p class="custom-font" style="color: mediumblue">NOVEMBER</p>
  <div
    style="color: mediumblue; width: 40%; padding: 10px 0"
    @click="toggleCard"
  >
    <svg-icon
      type="mdi"
      :path="mdiFolderOpenPath"
      style="color: grey"
    ></svg-icon>
    카테고리
  </div>
  <v-card v-if="showCardContents">
    <v-card-title></v-card-title>
    <v-card-text>
      <div style="font-size: 18px; padding: 2px">
        <svg-icon type="mdi" :path="mdiTagPath" style="color: grey"></svg-icon>
        [전체보기]
      </div>
      <div style="font-size: 17px; padding: 2px">
        <svg-icon type="mdi" :path="mdiTagPath" style="color: grey"></svg-icon>
        회사
      </div>
      <div style="font-size: 17px; padding: 2px">
        <svg-icon type="mdi" :path="mdiTagPath" style="color: grey"></svg-icon>
        개인공부
      </div>
      <div style="font-size: 17px; padding: 2px">
        <svg-icon type="mdi" :path="mdiTagPath" style="color: grey"></svg-icon>
        약속
      </div>
    </v-card-text>
  </v-card>
  <div
    style="color: mediumblue; width: 50%; padding-bottom: 10px"
    @click="toggleCard2"
  >
    <svg-icon
      type="mdi"
      :path="mdiFormatListChecksPath"
      style="color: grey"
    ></svg-icon>
    다가오는 일정
  </div>
  <v-card v-if="showCardContents2">
    <v-card-title></v-card-title>
    <v-card-text>
      <div style="font-size: 17px; padding: 2px">
        <svg-icon type="mdi" :path="mdiPinPath" style="color: grey"></svg-icon>
        일정내용
      </div>
      <div style="font-size: 17px; padding: 2px">
        <svg-icon type="mdi" :path="mdiPinPath" style="color: grey"></svg-icon>
        일정내용
      </div>
      <div style="font-size: 17px; padding: 2px">
        <svg-icon type="mdi" :path="mdiPinPath" style="color: grey"></svg-icon>
        일정내용
      </div>
    </v-card-text>
  </v-card>
  <div style="color: mediumblue">
    <svg-icon
      type="mdi"
      :path="mdiPencilPlusPath"
      style="color: grey"
    ></svg-icon>
    <router-link to="/newplan">새 일정 추가</router-link>&nbsp;
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lilita+One&display=swap");

.custom-font {
  font-family: "Lilita One", sans-serif;

  font-size: 40px;
}
</style>
