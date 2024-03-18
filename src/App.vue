<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro' : modoEscuro}">
    <div class="column is-one-quarter">
      <BarraLateral @alterarTema="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes/>
      <RouterView>
      </RouterView>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Notificacoes from './components/Notificacoes.vue';
export default defineComponent({
  name: 'App',
  components: { BarraLateral, Notificacoes },
  data() {
    return {
      modoEscuro: false
    }
  },
  methods: {
    trocarTema(modoEscuro: boolean) {
      this.modoEscuro = modoEscuro
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primarios: #fff;
  --texto-primario: #000;
}

main.modo-escuro{
  --bg-primarios: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo{
  background-color: var(--bg-primarios);
}
</style>
