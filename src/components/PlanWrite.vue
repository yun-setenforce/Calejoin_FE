<script setup>

import {ref, watch} from "vue";

const showDatePicker = ref(false);
const isChecked = ref(false);
const modalOpen = ref(false);
const repeatData = ref({
  repeatCycle: "",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
  insertData: {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
  },
  repeatMonth: 1,
  End: false,
});
const handleSubmit = () => {
  // 폼 제출 처리 로직
  console.log("폼 데이터:", repeatData.value);
  // repeatData.value를 활용하여 데이터를 저장하거나 다른 로직을 수행할 수 있습니다.

};
const handleWeekdayCheckboxChange = (day) => {
  // 체크박스가 변경될 때 호출되는 메서드
  // 선택된 요일을 1로 설정, 선택 해제되면 0으로 설정
  repeatData.value["insertData"][day] = !repeatData.value[day] ? 0 : 1;
};


watch(isChecked, (value) => {
  if (value) {
    openModal(); // 체크박스가 체크되면 모달 열기
  } else {

    closeModal(); // 체크박스가 해제되면 모달 닫기
  }
});

// 모달 열기
const openModal = () => {
  modalOpen.value = true;
};

// 모달 닫기
const closeModal = () => {
  modalOpen.value = false;
};

const cancle = () => {
  modalOpen.value = false;
  isChecked.value = false;
};


const daySelect = () => {
  showDatePicker.value = true;
};
const dayNone = () => {
  showDatePicker.value = false;
};



</script>

<template>
  <v-app>
    <v-container style="background: #fffdfa">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <p style="margin-top: 25%; font-size: 25px;  font-weight: bold; letter-spacing: -2px;"  >일정 입력하기</p>
          <p class="smallTitle">제목</p>
          <input type="text" style="background: white; margin-top: 1.3%; border: solid 1px darkgrey ; width: 100%; border-radius: 5px; padding: 8px; " placeholder="일정 제목 입력...">
          <p class="smallTitle" >카테고리</p>
          <select type="text" style="background: white; margin-top: 1.3%; border: solid 1px darkgrey ; width: 25%; border-radius: 5px; padding: 8px;">
            <option>데이터출력~</option>
            <option>데이터출력~</option>
          </select>
          <p class="smallTitle">일시</p>
          <div>
            <input class="inputStyle" type="date" name="start"/>
            <input class="inputStyle" type="time" name="start"/>
            <span style="font-weight: bold; font-size: 20px">~</span>
            <input class="inputLeftStyle" type="date" name="end"/>
            <input class="inputLeftStyle" type="time" name="end"/>
            <v-checkbox style="float: right; margin-top: 10px" v-model="isChecked" label="반복"></v-checkbox>
            <v-dialog v-model="modalOpen" max-width="350px">
              <v-card>
                <form @:submit.prevent="handleSubmit">
                <v-card-title style="border-bottom: solid 1px grey;  font-weight: bold; " >반복일정 설정</v-card-title>
                <v-card-text>
                  <form>
                  <div>
                    <span style="font-size: 13px; font-weight: bold">반복주기</span>
                    <select  type="text" style="background: white; color:grey;  margin-left: 5%; margin-top: 1.3%; border: solid 1px darkgrey ; width: 60%; border-radius: 5px; padding: 8px;" v-model="repeatData.repeatCycle">
                      <option value="W">매주</option>
                      <option value="M">매달</option>
                      <option value="Y">매년</option>
                    </select>
                  </div>
                  <div>
                    <span style="font-size: 13px; font-weight: bold;">반복요일</span>
                    <input type="checkbox" style="margin-left: 15px; margin-top: 15px" id="monday" v-model="repeatData.monday" @change="handleWeekdayCheckboxChange('monday')" />
                    <label for="monday">월</label>
                    <input type="checkbox" style="margin-left: 15px;" id="tuesday" v-model="repeatData.tuesday" @change="handleWeekdayCheckboxChange('tuesday')"  />
                    <label for="tuesday">화</label>
                    <input type="checkbox" style="margin-left: 15px;" id="wednesday" v-model="repeatData.wednesday" @change="handleWeekdayCheckboxChange('wednesday')" />
                    <label for="wednesday">수</label>
                    <input type="checkbox" style="margin-left: 15px;" id="thursday" v-model="repeatData.thursday" @change="handleWeekdayCheckboxChange('thursday')" />
                    <label for="thursday">목</label>
                    <input type="checkbox" style="margin-left: 15px;" id="friday" v-model="repeatData.friday" @change="handleWeekdayCheckboxChange('friday')" />
                    <label for="friday">금</label>
                    <input type="checkbox" style="margin-left: 69px;" id="saturday" v-model="repeatData.saturday" @change="handleWeekdayCheckboxChange('saturday')" />
                    <label for="saturday">토</label>
                    <input type="checkbox" style="margin-left: 15px;" id="sunday" v-model="repeatData.sunday" @change="handleWeekdayCheckboxChange('sunday')" />
                    <label for="sunday">일</label>
                  </div>
                  <div>
                    <span style="font-size: 13px; font-weight: bold">반복날짜</span>
                    <input  type="number" id="day" style="background: white; color:grey;  margin-left: 5%; margin-top: 1.3%; border: solid 1px darkgrey ; width: 60%; border-radius: 5px; padding: 5px;" v-model="repeatData.repeatMonth" />
                    <label for="day" style="margin-left: 5px">일</label>
                  </div>
                  <div style="margin-top: 10px">
                    <span style="font-size: 13px; font-weight: bold">종료일자</span>
                    <input @click="daySelect" type="radio" id="daySelect" name="group1" style="margin-left: 15px" />
                    <label for="daySelect">날짜지정</label>
                    <input @click="dayNone"  type="radio" id="none" name="group1" style="margin-left: 15px" value="null" v-model="repeatData.End" />
                    <label for="none">없음</label>
                    <input v-if="showDatePicker" style="margin-top: 1.5%; margin-left: 70px; background: white; border: solid 1px darkgrey; border-radius: 5px; padding: 8px;" type="date" name="repeatStart" v-model="repeatData.End" />
                  </div>
                  </form>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="cancle">취소하기</v-btn>
                  <input @click="closeModal" type="submit" style="margin-left: 190px" value="추가하기">
                </v-card-actions>
                </form>
              </v-card>
            </v-dialog>
            <p class="smallTitle">참석자</p>
            <div>
              <select type="text" style="background: white; margin-top: 1.3%; border: solid 1px darkgrey ; width: 25%; border-radius: 5px; padding: 8px;">
                <option>친구리스트~</option>
                <option>친구리스트~</option>
              </select>
                <v-col style="float: right; margin-right: 68%; margin-top: 5px" cols="auto">
                  <v-btn class="plusFri" density="compact" icon="mdi-plus"></v-btn>
                </v-col>
            </div>
            <div>
              <p class="smallTitle">메모</p>
              <textarea style="background: white; margin-top: 1.3%; border: solid 1px darkgrey ; width: 100%; border-radius: 5px; padding: 8px;"></textarea>
            </div>
            <div style="margin-top: 2%">
              <span class="smallTitleMargin">공개여부</span>
              <input type="radio" id="All" name="group2"/>
              <label for="All" style="margin-right: 4%;">전체공개</label>
              <input type="radio" id="FrAll" name="group2"/>
              <label for="FrAll" style="margin-right: 4%;" >친구 전체공개</label>
              <input type="radio" id="onlyDay" name="group2"/>
              <label for="onlyDay">일자만 공개(내용,참석자 비공개)</label>
            </div>
            <div style="margin-top: 2%">
              <span class="smallTitleMargin">알람여부</span>
              <input type="radio" id="BallOn" name="group3"/>
              <label for="BallOn" style="margin-right: 4%;">알림</label>
              <input type="radio" id="BallOff" name="group3"/>
              <label for="BallOff" style="margin-right: 4%;" >알림X</label>
            </div>
          </div>
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
.smallTitleMargin {
  margin-right: 5%;
  font-size: 15px;
  color: grey;
  font-weight: bold;

}
.inputStyle {
  margin-right: 3%;
  margin-top: 1.5%;
  background: white;
  border: solid 1px darkgrey;
  border-radius: 5px;
  padding: 8px;
}
.inputLeftStyle {
  margin-left:  3%;
  margin-top: 1.5%;
  background: white;
  border: solid 1px darkgrey;
  border-radius: 5px;
  padding: 8px;
}
</style>
