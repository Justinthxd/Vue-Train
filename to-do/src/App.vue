<script setup>
import { ref } from 'vue';

const showModal = ref(false);

const newNote = ref('');

const notes = ref([]);

const errorMessage = ref('');

let id = 0;

const getRandomColor = () => {
  return "hsl(" + Math.random() * 360 + ", 100%, 5%)";
}

const addNote = () => {
  if (newNote.value.trim().length < 10) {
    return errorMessage.value = 'Notes needs to be 10 characters or more.';
  }
  console.log('here');
  notes.value.push({
    id: id++,
    title: newNote.value.trim(),
    date: new Date(),
    backgroundColor: getRandomColor(),
  });
  newNote.value = '';
  showModal.value = false;
  errorMessage.value = '';
}


</script>
<template>
  <main>
    <div v-show="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="note" cols="30" rows="5"></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote()">Add note</button>
        <button @click="showModal = false" class="close">close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div v-for="note in notes" :key="note.id" class="card" :style="{ backgroundColor: note.backgroundColor }">
          <p class="main-text">{{ note.title }}</p>
          <p class="date">{{ note.date.toLocaleDateString(en - US) }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: rgb(46, 46, 46);
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 65px;
  color: rgb(214, 206, 206);

}

header button {
  border: none;
  padding: 10px;
  height: 50px;
  width: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 27px;
}

.card {
  height: 225px;
  width: 225px;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.801);
  font-size: 25px;
}

.date {
  font-size: 12.5px;
  font-weight: bold;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background-color: rgb(48, 48, 48);
  border-radius: 5px;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: rgb(92, 67, 116);
  border: none;
  color: white;
  margin-top: 15px;
  border-radius: 5px;
}

.modal textarea {
  background-color: rgb(27, 27, 27);
  border: none;
  border-radius: 5px;
  color: rgb(153, 153, 153);
  font-size: 20px;
  padding: 20px;
}

.modal .close {
  background-color: rgb(121, 51, 51);
  margin-top: 7px;
}

.modal p {
  color: red;
}
</style>