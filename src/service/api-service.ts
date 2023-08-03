import { httpClient } from "./http-client";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:3001/'
export const OrderAPIs = {
  purchaseOrder: async (params: FormData) => await httpClient.post(`${API_BASE_URL}order/purchase`, params)
}