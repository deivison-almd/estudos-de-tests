<template>
  <v-app>
    <div>
      <Login />
      <!--<Form />-->
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

import Modal from '~/components/Modal.vue'
import Formulario from '~/components/Formulario.vue'
import Login from '~/pages/Login/Login.vue'

export default Vue.extend({
  name: 'idexPage',
  components: { Modal, Login, Formulario },
})
</script>

<style scoped></style>
