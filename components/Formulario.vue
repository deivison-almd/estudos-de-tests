<template>
  <form @submit.prevent>
    <CampoTexto
      data-testid="form-name"
      label="Nome"
      id="name"
      v-model="model.name"
    />

    <CampoTexto
      data-testid="form-last_name"
      label="Sobrenome"
      id="last_name"
      v-model="model.last_name"
    />

    <div class="field" data-testid="form-position">
      <label class="label" for="position"> Posição atual </label>

      <div class="control">
        <div class="select">
          <select id="position" v-model="model.position">
            <option option value="front">Front End</option>

            <option option value="back">Back End</option>

            <option option value="devops">DevOps</option>
          </select>
        </div>
      </div>
    </div>

    <div class="buttons">
      <button
        button
        type="button"
        class="button is-is-danger"
        data-testid="btn-cancel"
      >
        Cancelar
      </button>

      <button
        button
        type="submit"
        class="button is-primary"
        data-testid="btn-save"
        @click="handleSubmit"
      >
        Salvar
      </button>
    </div>
  </form>
</template>

<script script>

import CampoTexto from './CampoTexto.vue'
import Formulario from './Formulario.vue'

export default {
  name: 'Formulario',
  components: {
    Formulario,
    CampoTexto
},
  data: () => ({
    model: {
      name: null,
      last_name: null,
      position: null,
    },
  }),
  computed: {
    canSave() {
      return (
        this.isNotEmpty(this.model.name) &&
        this.isNotEmpty(this.model.last_name) &&
        this.isNotEmpty(this.model.position)
      )
    },
  },
  methods: {
    handleSubmit() {
      if (!this.canSave) {
        return
      }
      this.$emit('save', this.model)
    },
    isNotEmpty(value) {
      return value !== null || (typeof value === 'string' && value.length > 0)
    },
  },
}
</script>
