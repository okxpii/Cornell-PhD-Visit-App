<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  data() {
    return { selectedTab: 'Schedule' }
  },
  methods: {
  svg(tab) {
    switch (tab) {
      case '':
        return 'images/calendar.svg'
      case 'Networking':
        return 'images/people.svg'
      case 'Resources':
        return 'images/info.svg'
      default:
        return ''
    }
  }
  }
}
</script>

<template>
  <b-container fluid class="h-100 mx-0 px-0" style="overflow-y: scroll;">
    <RouterView />
  </b-container>

  <b-navbar center bg-variant="light" class="w-100">
  <b-navbar-nav fixed="bottom" sticky="true" v-for="tab in ['', 'Networking' , 'Resources']">
      <div v-if="selectedTab == tab">
        <b-nav-item active style="font-weight: bold;">
        <b-img center :src="svg(tab)" />
          {{ tab == '' ? 'Schedule' : tab }}
        </b-nav-item>
      </div>
      <div v-else>
        <b-nav-item :to="`/${tab.toLowerCase()}`">
           <b-img center :src="svg(tab)" />
          {{ tab == '' ? 'Schedule' : tab }}
        </b-nav-item>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<style scoped>
.navbar-nav-svg {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  vertical-align: text-top;
}
</style>
