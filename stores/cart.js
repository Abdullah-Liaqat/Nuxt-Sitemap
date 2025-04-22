import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product) {
      const existing = this.items.find(item => item.name === product.name)
      if (existing) {
        existing.quantity += 1
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(productName) {
      this.items = this.items.filter(item => item.name !== productName)
    }
  },
  getters: {
    cartCount: state => state.items.reduce((total, item) => total + item.quantity, 0),
    cartTotal: state => state.items.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0)
  }
})
