import { defineStore } from 'pinia'
import initialGames    from '../data/games.json'

export const useGameStore = defineStore('game', {
  state: () => ({
    games: [],    // здесь будут ваши игры
    nextId: 1
  }),
  actions: {
    loadGames() {
      const saved = localStorage.getItem('games')
      if (saved) {
        this.games = JSON.parse(saved)
      } else {
        this.games = initialGames
        localStorage.setItem('games', JSON.stringify(this.games))
      }
      this.nextId = this.games.length
        ? Math.max(...this.games.map(g => g.id)) + 1
        : 1
    },
    addGame(game) {
      this.games.push({ id: this.nextId++, ...game })
      localStorage.setItem('games', JSON.stringify(this.games))
    },
    removeGame(id) {
      this.games = this.games.filter(g => g.id !== id)
      localStorage.setItem('games', JSON.stringify(this.games))
    },
    getGame(id) {
      return this.games.find(g => g.id === Number(id))
    }
  }
})
