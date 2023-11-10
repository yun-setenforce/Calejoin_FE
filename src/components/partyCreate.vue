<script>
import Profile from "@/components/Profile.vue";
import EventCalendar from "@/components/EventCalendar.vue";
import Sidebar from "@/components/SideBare.vue";

export default {
  name: "partyCreate",
  components: {
    Sidebar,
    Profile,
    EventCalendar,
  },
};
</script>

<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.colors.primary }">
    <Sidebar />
    <v-main>
      <v-container class="px-15 mt-n1" fluid>
        <v-row justify-end>
          <v-col cols="12" md="12">
            <!-- title -->
            <h3 class="maintit">Show Time</h3>

            <!-- miniTitle -->
            <h3 class="mintit">파티 모집하기</h3>
            <!-- party Create Form -->

          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.maintit {
  text-align: center;
  margin: 50px 0;
  border: 1px solid red;
}
.mintit {
  text-align: left;
  margin-bottom: 30px;
  padding-left: 300px;
  border: 1px solid green;
}


</style>
