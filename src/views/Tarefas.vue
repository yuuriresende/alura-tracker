<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <Box v-if="tarefas.length == 0">
            Você não esta muito produtivo hoje :(
        </Box>
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import ITarefa from '../interfaces/ITarefa';
import Box from '../components/Box.vue';
import { useStore } from '@/store';
import { ADICIONA_TAREFA } from '@/store/tipo-mutacoes';

export default defineComponent({
    name: 'App',
    components: { Formulario, Tarefa, Box },
   
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            // this.tarefas.push(tarefa)
            this.store.commit(ADICIONA_TAREFA, tarefa)

        }
    },
    setup(){
        const store = useStore()
        return {
            tarefas: computed(()=> store.state.tarefas),
            store
        }
    }
});
</script>
  
<style>

</style>
  