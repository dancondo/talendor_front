export const formatPrice = (price: number, currency: string = 'USD') => {
  return `${currency}${price / 100}`
}