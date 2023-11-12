<script setup>
import NetworkingEntry from '../components/NetworkingEntry.vue';
</script>

<script>
import { networkstate } from '../state.js'

export default {
  data() {
    return {
      networkstate
    }
  }
}
</script>

<template>
  <h1 class="text-center">Networking</h1>
  <b-container fluid>
    <b-row class="mb-2">
      <b-col cols="12"> Filter by Research Field: </b-col>
      <b-dropdown :text="networkstate.selectedDept">
        <div v-for="(entry, dept) in fixtures['networking']">
          <div v-if="networkstate.selectedDept == dept">
            <b-dropdown-item active @click="networkstate.selectedDept = dept">{{ dept }}</b-dropdown-item>
          </div>
          <div v-else>
            <b-dropdown-item @click="networkstate.selectedDept = dept">{{ dept }}</b-dropdown-item>
          </div>
        </div>
      </b-dropdown>
    </b-row>
  </b-container>

  <b-container v-for="entry in fixtures['networking'][networkstate.selectedDept]">
    <NetworkingEntry :name="entry.name" :dept="entry.dept" :research="entry.research" :lab="entry.lab"
      :email="entry.email" :image="entry.image" class="my-2" />
  </b-container>
</template>
