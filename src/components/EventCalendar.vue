<script setup>
import { ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "@/calendarEvent/calendarEvent";

const currentEvents = ref([]);

const calendarOptions = {
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  initialView: "dayGridMonth",
  selectable: true,
  initialEvents: INITIAL_EVENTS,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
  select: handleDateSelect,
  dayMaxEvents: true,
  selectMirror: true,
  editable: true,
};

function handleDateSelect(selectInfo) {
  let title = prompt("일정을 입력해주세요!!");
  let calendarApi = selectInfo.view.calendar;

  calendarApi.unselect(); // clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
  }
}

function handleEventClick(clickInfo) {
  if (confirm(`일정을 삭제할래? '${clickInfo.event.title}'`)) {
    clickInfo.event.remove();
  }
}

function handleEvents(events) {
  currentEvents.value = events;
}
const search = "";

const searchItem = () => {
  console.log("Searched for:", this.search);
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
    style="float: right; clear: both; width: 30%; margin-top: 10px"
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
  border: none;
}
.fc .fc-button-primary:disabled {
  background-color: royalblue;
}
.fc-view-harness {
  margin-top: 50px;
  margin-bottom: 50px;
}
.fc-toolbar-chunk {
}
.v-text-field input.v-field__input {
  --v-field-input-padding-top: 1px;
  --v-field-input-padding-bottom: none;
}
</style>
