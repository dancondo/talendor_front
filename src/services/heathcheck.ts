import { httpGet } from "./http"

export const fetchHeathCheck = async () => {
  return httpGet('healthcheck')
} 