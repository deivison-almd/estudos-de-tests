<template>
  <div class="field">
    <label class="label" :for="id">
      {{ label }}
    </label>

    <div class="control">
      <input
        class="input"
        :id="id"
        type="text"
        :value="value"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    id: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
