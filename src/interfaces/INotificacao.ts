export enum TipoNotificacao{
    SUCESSO,
    FALHA,
    ATENCAO
}

export default interface INotificacao{
    title: string,
    texto: string,
    tipo: TipoNotificacao,
    id: number
}