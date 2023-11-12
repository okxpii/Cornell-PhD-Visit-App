<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  dept: {
    type: String,
    required: true
  },
  research: {
    type: String,
    required: true
  },
  lab: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <b-card border-variant="dark">
    <h2>{{ name }}</h2>
    <img :src="`images/${image}`" class="img-fluid" /> <br />
    <b>Department:</b> {{ dept }} <br />
    <b>Research:</b> {{ research }} <br />
    <b>Lab:</b> {{ lab }} <br />
    <b>Email:</b> <a href="mailto:{{ email }}"> {{ email }} </a>
  </b-card>
</template>
