import { httpDelete, httpGet } from "./http"

export const fetchProducts = async () => {
  return httpGet('products')
}

export const deleteProduct = async (id: number) => {
  return httpDelete(`products/${id}`)
}