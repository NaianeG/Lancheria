interface FormaPagamento {
    id: number;
    tipo: string;
    pedidos: Pedido[];
}