// apiService.js
import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'https://your-api-endpoint.com';

interface Item {
    id: number;
    name: string;
    description?: string;
}

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const apiService = {
    fetchItems(): Promise<AxiosResponse<Item[]>> {
      return apiClient.get<Item[]>('/items');
    },
    
    fetchItemById(id: number): Promise<AxiosResponse<Item>> {
      return apiClient.get<Item>(`/items/${id}`);
    },
  
    createItem(data: Item): Promise<AxiosResponse<Item>> {
      return apiClient.post<Item>('/items', data);
    },
  
    updateItem(id: number, data: Partial<Item>): Promise<AxiosResponse<Item>> {
      return apiClient.put<Item>(`/items/${id}`, data);
    },
  
    deleteItem(id: number): Promise<AxiosResponse<void>> {
      return apiClient.delete(`/items/${id}`);
    }    
  };
  
export default apiService;

export const fetchGitHubUser = (username: string): Promise<AxiosResponse<any>> => {
    return apiClient.get<any>(`https://api.github.com/users/${username}`);
  };
export const fetchUser = (username: string): Promise<AxiosResponse<any>> => {
    return apiClient.get<any>(`http://localhost:8080/api/clients/${username}`);
  }
  