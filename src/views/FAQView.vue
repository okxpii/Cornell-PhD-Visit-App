<template>
    <b-button class="back-btn" :to="`/resources`" variant="light"><h4>&#8249;</h4></b-button>
    <h1 class="text-center">Frequently Asked Questions</h1>

    <b-card style="background-color: white; border: none;" no-body class="mb-1 border-0" v-for="(fixture, route) in this.fixtures['faq']">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-row fluid>
            <b-button class="toggle" v-b-toggle="fixture.num" variant="light">
                &#9207; &#160; &#160;{{ fixture.header }}
            </b-button>
        </b-row>
      </b-card-header>
      <b-collapse :id="fixture.num" role="tabpanel">
        <b-card-body style="background-color: white;">
          <b-card-text>{{ fixture.info }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>


</template>
<style scoped>
.toggle {
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem;
  color: #B31B1B;
  background: #F6F6F6;
  text-align: start;
  border: 0;
}

</style>
