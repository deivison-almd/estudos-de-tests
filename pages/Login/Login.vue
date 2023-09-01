<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="448"
      max-height="200"
      src="https://as2.ftcdn.net/v2/jpg/04/64/64/09/1000_F_464640910_Bid7MoSLjzV6wv6Ukhks0sx9EhDgljIw.jpg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        density="compact"
        placeholder="Endereço de email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Senha

        
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Entre com sua senha"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      />

      <div>
        <ModalEsqueceuSenha
          class="text-caption text-decoration-none text-blue pl-4 pt-3"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Esqueceu sua senha?</ModalEsqueceuSenha
        >
      </div>

      <v-btn
        block
        class="white--text my-8"
        color="blue"
        size="large"
        variant="tonal"
      >
        Entrar
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Cadastre-se agora <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import ModalEsqueceuSenha from '~/components/ModalEsqueceuSenha.vue'

export default {
  data: () => ({
    visible: false,
  }),
  components: { ModalEsqueceuSenha },
}
</script>
