<template>
  <v-app>
    <div>
      <Component />
      <Login />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

import Component from '~/components/Component.vue'
import Login from '~/pages/Login/Login.vue'

export default Vue.extend({
  name: 'idexPage',
  components: { Component, Login },
})
</script>

<style scoped></style>
