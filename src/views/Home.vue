<script setup>
import Sidebar from "@/components/SideBare.vue";
import EventCalendar from "@/components/EventCalendar.vue";
import Profile from "@/components/Profile.vue";
</script>

<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.colors.primary }">
    <v-main>
      <v-container class="px-15 mt-n1" fluid>
        <v-row justify-end>
          <v-col cols="12" md="4">
<<<<<<< HEAD
            <Profile />
          </v-col>
          <v-col cols="12" md="8"
            >c
            <EventCalendar />
=======
            <profile/>
          </v-col>
          <v-col cols="12" md="8">
            <EventCalendar/>
>>>>>>> cb16213d58495f64b182d3fbab873bf0231f4554
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<<<<<<< HEAD
<script>
import Sidebar from "@/components/SideBare.vue";
import EventCalendar from "@/components/EventCalendar.vue";
import Profile from "@/components/Profile.vue";
export default {
  date: () => ({}),
  components: {
    Sidebar,
    EventCalendar,
    Profile,
  },
};
</script>

<style></style>
=======
<style scoped></style>
>>>>>>> cb16213d58495f64b182d3fbab873bf0231f4554
