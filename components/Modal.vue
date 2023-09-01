<template>
  <div class="text-center">
    <v-dialog :value="value" @input="$emit('input', $event)" :width="setWidth">
      <v-card class="pb-1">
        <v-card-title class="text-h5 grey lighten-2">
          <slot name="titulo" />
        </v-card-title>

        <v-card-title class="text-h4 primary white--text text-center">
          <slot name="titulo" />
        </v-card-title>

        <div style="padding: 25px 25px; min-height: 40px">
          <slot />
        </div>

        <v-divider />

        <v-card-actions class="ma-0">
          <v-spacer />
          <slot name="comandos" />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    setWidth: {
      type: String || Number,
      default: '500',
    },
  },
})
</script>
