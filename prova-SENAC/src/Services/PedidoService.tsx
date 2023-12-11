import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'http://localhost:8080/pedido';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'    
  }
});

const pedidoService = {
    fetchPedidos(): Promise<AxiosResponse<Pedido[]>> {
      return apiClient.get<Pedido[]>('/lista');
    },
    
    fetchPedidoById(id: number): Promise<AxiosResponse<Pedido>> {
      return apiClient.get<Pedido>(`/buscaId/${id}`);
    },
  
    createPedido(Pedido: Pedido): Promise<AxiosResponse<Pedido>> {
      return apiClient.post<Pedido>('/cadastro', Pedido);
    },
  
    deletePedido(id: number): Promise<AxiosResponse<void>> {
      return apiClient.delete(`/excluir/${id}`);
    }    
  };
  
export default pedidoService;
