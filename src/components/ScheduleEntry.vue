<script setup>
defineProps({
  startTime: {
    type: Number,
    required: true
  },
  endTime: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  googleMaps: {
    type: String,
    required: true
  },
  guard: {
    type: Boolean,
    required: true
  },
  freeTime: {
    type: Boolean,
    required: false
  },
  currentTime: {
    type: Number,
    required: false
  },
})
</script>

<template>
  <b-card :border-variant="outline" id="time" :bg-variant="color" :text-variant="text">
    <div :class="line" :style="{ top: position + '%' }">
      <div class="red-line" v-bind:style="{ left: timeStampRight ? '0' : 'auto', right: timeStampRight ? 'auto' : '0' }">
      </div>
      <p class="timeStamp"
        v-bind:style="{ right: timeStampRight ? '1px' : 'auto', left: timeStampRight ? 'auto' : '1px', top: timeStampTop ? '-5px' : (timeStampBottom ? '-20px' : '-12px') }">
        {{ (format(currentTime)).replace('pm', '') }}</p>
    </div>
    <h4>{{ format(startTime) + ' - ' + format(endTime) }}</h4>
    <h2>{{ name }}</h2>
    <h4 v-if="googleMaps" align="right">
      <a :href="googleMaps" target="_blank" :style="$props.guard ? 'color: #F0F8FF;' : 'color: light-blue;'">
        {{ location }}
      </a>
    </h4>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      position: this.$props.guard ? this.calcLine(this.$props.startTime, this.$props.endTime, this.$props.currentTime) : 0,
      color: this.$props.guard ? "secondary" : "",
      line: this.$props.guard ? "container" : "none",
      text: this.$props.guard ? "white" : (this.$props.freeTime ? "muted" : ""),
      outline: this.$props.freeTime ? "muted" : "dark",
      timeStampRight: (this.calcLine(this.$props.startTime, this.$props.endTime, this.$props.currentTime) < 60),
      timeStampTop: (this.calcLine(this.$props.startTime, this.$props.endTime, this.$props.currentTime) < 3),
      timeStampBottom: (this.calcLine(this.$props.startTime, this.$props.endTime, this.$props.currentTime) > 96)
    }
  },
  methods: {
    format(time) {
      return (Math.trunc(time) % 12).toString() + ':' + ('0' + (Math.round((time % 1) * 60)).toString()).slice(-2) + (time < 12 ? 'am' : 'pm')
    },
    calcLine(start, end, currentTime) {
      const diff = currentTime - start
      const overall = end - start
      return ((diff / overall) * 100)
    },
  },
}
</script>

<style scoped>
.red-line,
.container,
.timeStamp {
  position: absolute;
}

.red-line {
  width: 92%;
  height: 2px;
  background-color: red;
}

.container {
  right: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}

.timeStamp {
  top: 0;
}

.none {
  display: none;
}
</style>
