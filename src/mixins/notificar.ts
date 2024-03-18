import { TipoNotificacao } from "@/interfaces/INotificacao"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/tipo-mutacoes"

export const notificacaoMixin = {
    methods: {
        notificar (tipo: TipoNotificacao, title: string, texto: string) {
            store.commit(NOTIFICAR, {
                title,
                texto,
                tipo
            })
        }
    },
}