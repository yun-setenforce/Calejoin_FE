<script>
import Sidebar from "@/components/SideBare.vue";
import EventCalendar from "@/components/EventCalendar.vue";
import Profile from "@/components/Profile.vue";

export default {
  components: {
    Profile,
    EventCalendar,
    Sidebar,
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
            <h4>Show times</h4>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
