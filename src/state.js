import { reactive } from 'vue'
import fixtures from './fixtures.json'

export const state = reactive({
  selectedDay: Object.keys(fixtures['schedule'])[0]
})

export const networkstate = reactive({
  selectedDept: Object.keys(fixtures['networking'])[0]
})
