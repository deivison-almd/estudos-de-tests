<template>
  <v-row justify="start">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <a color="primary" dark v-bind="attrs" v-on="on">
          Esqueceu sua senha?
        </a>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Recuperar Conta</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-card-text>
                <span class="text-subtitle-1">Digite o email de recupecação</span>
              </v-card-text>

              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
}
</script>
