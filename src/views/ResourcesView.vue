<template>
  <b-container fluid class="h-100 mx-0 px-0" style="overflow-y: scroll; overflow-x:hidden">
    <h1 class="text-center">Resources</h1>
    <b-row align-h="center">
      <b-button class="square-btn" :to="`/Announcements`">
        <img src="/images/megaphone.png" width="70">
        <p>Announcements</p>
      </b-button>
      <b-button class="square-btn" :to="`/Transportation`">
        <img src="/images/delivery.png" width="70">
        <p>Transportation</p>
      </b-button>
    </b-row>
    <b-row align-h="center">
      <b-button class="square-btn" :to="`/Reimbursement`">
        <img src="/images/refund.png" width="70">
        <p>Reimbursement</p>
      </b-button>
      <b-button class="square-btn" :to="`/FAQ`">
        <img src="/images/help.png" width="70">
        <p>FAQ</p>
      </b-button>
    </b-row>
  </b-container>
</template>

<style scoped>
img {
  display: flex;
  margin: auto;
  margin-bottom: 20px;
}
</style>

<style>
.square-btn {
  height: 40%;
  width: 40%;
  margin: 5px;
  background-color: #B31B1B;
  padding-top: 30px;
  color: white;
  font-weight: bold;
}
</style>
