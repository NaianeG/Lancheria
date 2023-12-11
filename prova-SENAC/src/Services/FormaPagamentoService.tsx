import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'http://localhost:8080/formaPagamento';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'    
  }
});

const formaPagamentoService = {
    fetchFormaPagamentos(): Promise<AxiosResponse<FormaPagamento[]>> {
      return apiClient.get<FormaPagamento[]>('/lista');
    },
    
    fetchFormaPagamentoById(id: number): Promise<AxiosResponse<FormaPagamento>> {
      return apiClient.get<FormaPagamento>(`/buscaId/${id}`);
    },
  
    createFormaPagamento(formaPagamento: FormaPagamento): Promise<AxiosResponse<FormaPagamento>> {
      return apiClient.post<FormaPagamento>('/cadastro', formaPagamento);
    },
  
    deleteFormaPagamento(id: number): Promise<AxiosResponse<void>> {
      return apiClient.delete(`/excluir/${id}`);
    }    
  };
  
export default formaPagamentoService;
