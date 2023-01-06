<script setup>
import { ref, computed } from 'vue';
import AppBar from './components/AppBar.vue';
import Home from './components/Home.vue';
import Buy from './components/Buy.vue';


const routes = {
  '/': Home,
  '/buy': Buy
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#/">Posrche</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#/buy">Buy</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item " href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled text-white">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <component :is="currentView" />
</template>

<style scoped>
.middleBody {
  height: 400px;
  background-color: white;
}

.option {
  width: auto;
  height: 200px;
  padding: 20px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  font-family: 'Times New Roman', Times, serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.option:hover {
  background-color: rgb(43, 43, 68);
  transition: 2s ease-out;
  color: white;
}

.footer {
  height: 200px;
  background-color: rgb(37, 37, 37);
  color: white;
}
</style>
