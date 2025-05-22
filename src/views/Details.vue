<template>
  <div>
    <button class="btn btn-link mb-3 text-white" @click="$router.back()">← Назад</button>
    <div v-if="game">
      <h2 class="text-steam-accent mb-3">{{ game.title }}</h2>
      <img v-if="game.coverUrl" :src="game.coverUrl" class="img-fluid mb-3" alt="cover"/>
      <p class="mb-3">{{ game.description }}</p>
      <!-- Кнопка “облачного” запуска -->
      <button type="button" class="btn btn-steam" data-bs-toggle="modal" data-bs-target="#cloudModal">
        Запустить в облаке
      </button>

      <!-- Bootstrap Modal -->
      <div class="modal fade" id="cloudModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content bg-dark text-white">
            <div class="modal-header">
              <h5 class="modal-title text-steam-accent">Облачный запуск: {{ game.title }}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center">
              <p>Здесь будет трансляция игры...</p>
              <div class="placeholder-glow">
                <span class="placeholder col-12" style="height:400px;"></span>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="text-danger">Игра не найдена.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useGameStore } from '../stores/gameStore'

const route = useRoute()
const store = useGameStore()
const game = store.getGame(route.params.id)
</script>
