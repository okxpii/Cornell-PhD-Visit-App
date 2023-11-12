<script setup>
import ScheduleEntry from '../components/ScheduleEntry.vue';
</script>

<script>
import { state } from '../state.js'

export default {
  data() {
    return {
      state,
      currentDate: this.setDate(19, 0)
    }
  },
  methods: {
    setDate(hour, min) {
      let date = new Date()
      date.setFullYear(2023, 2, 30)
      // date.setHours(hour)
      // date.setMinutes(min)
      return date.toLocaleString()
    },
    getHour() {
      let dateString = this.currentDate
      const time = dateString.split(',')[1]
      const timeComponents = time.split(':');
      return ((timeComponents[2].includes('PM')) ? parseInt(timeComponents[0]) + 12 : parseInt(timeComponents[0]))
    },
    getMin() {
      let dateString = this.currentDate
      const time = dateString.split(',')[1]
      const timeComponents = time.split(':')
      return (parseInt(timeComponents[1]) / 60)
    },
    getTime() {
      const currentTime = this.getHour() + this.getMin()
      return currentTime
    },
    getDate() {
      let dateString = this.currentDate
      const date = dateString.split(',')[0]
      return date
    },
    guard(start, end) {
      const dateString = this.getDate()
      const current = this.getTime()
      const fixtureDateString = new Date((state.selectedDay).replace(/(\d+)(st|nd|rd|th)/, '$1') + ' 2023').toLocaleString().split(',')[0]
      if (dateString != fixtureDateString) {
        return false
      }
      else if (current >= start && current < end) {
        return true
      } else {
        return false
      }
    },
    freeTime(event) {
      if (event == "Free Time") {
        return true
      } else {
        return false
      }
    }
  },
}
</script>

<template>
  <b-container fluid class="h-100 mx-0 px-0" style="overflow-y: scroll;">
    <h1 class="text-center">Julia's Schedule</h1>
    <b-container fluid>
      <b-row class="mb-2">
        <b-dropdown :text="state.selectedDay" variant="danger">
          <div v-for="(entry, day) in fixtures['schedule']">
            <div v-if="state.selectedDay == day">
              <b-dropdown-item active @click="state.selectedDay = day">{{ day }}</b-dropdown-item>
            </div>
            <div v-else>
              <b-dropdown-item @click="state.selectedDay = day">{{ day }}</b-dropdown-item>
            </div>
          </div>
        </b-dropdown>
      </b-row>
    </b-container>
    <b-container fluid v-for="entry in fixtures['schedule'][state.selectedDay]">
      <ScheduleEntry :start-time="entry.startTime" :end-time="entry.endTime" :name="entry.name" :location="entry.location"
        :google-maps="entry.googleMaps" :free-time="freeTime(entry.name)" :guard="guard(entry.startTime, entry.endTime)"
        :current-time="getTime()" class="my-2" />
    </b-container>
  </b-container>
</template>

<style scoped>
</style>
