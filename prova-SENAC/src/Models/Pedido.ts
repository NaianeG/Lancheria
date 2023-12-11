interface Pedido {
    id: number;
    data: Date;
    usuario: Usuario;
    endereco: Address;
    formaPagamento: FormaPagamento;    
}