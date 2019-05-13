<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <cv-button @click="onClick">Hello @carbon/vue</cv-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

/* eslint no-alert: "error" */
export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  methods: {
    onClick() {
      /* eslint-disable */
      alert('Hello @carbon/vue');
    },
  },
};
</script>
