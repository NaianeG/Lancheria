import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'http://localhost:8080/endereco';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'    
  }
});

const AddressService = {
    fetchAddress(): Promise<AxiosResponse<Address[]>> {
      return apiClient.get<Address[]>('/lista');
    },
    
    fetchAddressById(id: number): Promise<AxiosResponse<Address>> {
      return apiClient.get<Address>(`/buscaId/${id}`);
    },
  
    createAddress(Address: Address): Promise<AxiosResponse<Address>> {
      return apiClient.post<Address>("/cadastroEndereco", Address);
    },
  
    deleteAddress(id: number): Promise<AxiosResponse<void>> {
      return apiClient.delete(`/excluir/${id}`);
    }    
  };
  
export default AddressService;
