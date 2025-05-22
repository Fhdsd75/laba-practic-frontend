<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-steam">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../public/Logo.png" alt="Steam" height="150"/>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><router-link class="nav-link" to="/catalog">STORE</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/catalog">LIBRARY</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about">ABOUT</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Content with fade transition -->
    <transition name="fade" mode="out-in">
      <router-view class="container my-4" />
    </transition>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useGameStore } from './stores/gameStore'

const store = useGameStore()
onBeforeMount(() => {
  store.loadGames()
})
</script>
