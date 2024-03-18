<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefavoce deseja iniciar?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Temporizador @ao-temporizador-finalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from '@/store'
import {  NOTIFICAR } from '@/store/tipo-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotificacao';
import useNotificador from '@/hooks/notificador'
export default defineComponent({
    name: 'FormularioVue',
    emits: ['aoSalvarTarefa'],
    components: { Temporizador },
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            const projeto = this.projetos.find((p) => p.id == this.idProjeto);
            if(!projeto) { 
                this.notificar(TipoNotificacao.FALHA, 'Ops!', 'Selecione um projeto antes de finalizar a tarefa!')
                return; 
            }
            this.$emit('aoSalvarTarefa', { duracaoEmSegundos: tempoDecorrido, descricao: this.descricao, projeto: this.projetos.find(projeto => projeto.id == this.idProjeto) })
            this.descricao = ''
        }
    },
    setup() {
        const store = useStore(key)
        const { notificar } = useNotificador()
        return {
            projetos: computed(() => store.state.projetos),
            store,
            notificar
        }
    }
});

</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primarios);
}
</style>