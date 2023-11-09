<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth'
      },
      search: "",
    }
  },
  methods: {
    searchItem() {
      console.log("Searched for:", this.search);
    },
  },
};
</script>
<template>
    <v-text-field
      v-model="search"
      outlined
      clearable
      rounded
      variant="solo"
      theme="light"
      prepend-inner-icon="mdi-magnify"
      placeholder="Search...."
      class="no-padding"
      style="float: right; clear: both; width: 30%; margin-top:10px;"
      @input="searchItem"

    ></v-text-field>
    <FullCalendar :options="calendarOptions" />
</template>

<style>
.fc-direction-ltr {
  width: 100%;
}

.fc-col-header-cell-cushion {
  color: blue;
}
.fc .fc-toolbar-title {
  color: grey;
  font-size: 23px;
  margin: 0px;
}

.fc .fc-button-primary {
  background-color: royalblue;
}
.fc .fc-button {
  border : none;
}
.fc .fc-button-primary:disabled {
  background-color: royalblue;

}
.fc-view-harness {
  margin-top: 50px;
  margin-bottom: 50px;
}
.fc-toolbar-chunk{
}
.v-text-field input.v-field__input {
  --v-field-input-padding-top: 1px;
  --v-field-input-padding-bottom: none;

}



</style>
