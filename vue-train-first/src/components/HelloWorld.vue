<script setup>
import { db } from "../data/firebase";
import { ref as create } from 'vue';
import { ref, set } from "firebase/database";


let id = 0;

const tasks = create([]);
const aux = create('');

const add = () => {
  tasks.value.push({ id: id++, text: aux.value });
  aux.value = '';
}

const remove = (task) => {
  tasks.value = tasks.value.filter(x => x !== task);
}

const fire = () => {
  set(ref(db, 'taks/'), {
    title: "title",
    items: "items",
    note: "note",
    status: 'Pending',
  });
}

</script>

<template>
  <h1>Vite - Tasks</h1>
  <form @submit.prevent="add">
    <input v-model="aux" />
    <button>Add</button>
  </form>
  <h4 v-for="task in tasks">
    {{ task.text }}
    <button class="red-btn" @click="remove(task)">X</button>
  </h4>
  <button @click="fire">Firebase</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.red-btn {
  background-color: rgb(129, 0, 0);
}
</style>
