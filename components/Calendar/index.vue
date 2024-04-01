<template>
    <div class="calendar-container">
        <div class="wrapper">
            <div class="pro-calendar">
              <pro-calendar
                  :events="evts"
                  :loading="false"
                  :config="cfg"
                  view="week"
                  date="'isoStringDate'"
              >
                <template #leftSwitchArrow>
                  <!-- replace left switch arrow with this slot -->
                </template>

                <template #rightSwitchArrow>
                  <!-- replace left switch arrow with this slot -->
                </template>

                <template #closeButton>
                  <!-- replace close button with this slot -->
                </template>

                <template #loader="{ calendarGotLoading }">
                  <!-- replace calendar loader with this slot -->
                </template>

                <template #searchIcon>
                  <!-- replace search widget icon with this slot -->
                </template>

                <template #dateLeftArrow>
                  <!-- replace date picker left arrow with this -->
                </template>

                <template #dateRightArrow>
                  <!-- replace date picker right arrow with this -->
                </template>

                <template #sideEvent="{ dateSelected, calendarEvents }">
                  <!-- use this slot to show yourself side events in appearance you want -->
                  <!--
                    dateSelected: Date;
                    calendarEvents: Appointment[]; // all events
                  -->
                </template>

                <template #eventCard="{ date, time, cardEvent }">
                  <!-- use this slot to show yourself calendar event in appearance you want -->
                  <!--
                    date: Date;
                    time: string;
                    cardEvent: Appointment[]; // events according to date/time
                  -->
                </template>
              </pro-calendar>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "@lbgm/pro-calendar-vue/style";

onMounted(() => {
  ["calendar.request.view", "calendar.request.report"].forEach((e: string) => {
    document.body.addEventListener(e, (event: Event | CustomEvent) => {
      console.log({ event });
    });
  });
});
</script>
