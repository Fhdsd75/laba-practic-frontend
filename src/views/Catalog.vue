<template>
  <div>
    <h2 class="text-steam-accent mb-4">Моя библиотека</h2>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="g in store.games" :key="g.id">
        <div class="card card-steam h-100">
          <img v-if="g.coverUrl" :src="g.coverUrl" class="card-img-top" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ g.title }}</h5>
            <p class="card-text flex-grow-1">{{ g.description }}</p>
            <div class="mt-3">
              <router-link :to="`/details/${g.id}`" class="btn btn-sm btn-steam me-2">
                Подробнее
              </router-link>
              <button class="btn btn-sm btn-danger" @click="store.removeGame(g.id)">
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-if="!store.games.length" class="text-muted">Каталог пуст — добавьте игру!</p>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/gameStore'
const store = useGameStore()
</script>
