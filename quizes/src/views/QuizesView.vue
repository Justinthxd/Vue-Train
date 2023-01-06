<script setup>
import { ref, watch, onBeforeMount } from 'vue';
import { useRouter } from "vue-router";
import Card from '../components/Card.vue';
import database from "../data/firebase";

const quizes = ref([]);
const search = ref("");
const router = useRouter();

watch(search, () => {
    quizes.value = data.filter(q => q.title.toLowerCase().includes(search.value));
});

onBeforeMount(() => {
    database.ref('main').child('quizes').once('value', (snapshot) => {
        snapshot.forEach(function (childSnapshot) {
            var data = childSnapshot.val();
            quizes.value.push(data);
        });
    });
});

const test = () => { }

const navigateToAdmin = () => {
    router.push('/admin');
}

</script>

<template>
    <div>
        <header>
            <h1>Quizes</h1>
            <input v-model.trim()="search" type="text" placeholder="Search">
            <h1 @click="test" class="test">Test</h1>
            <h1 @click="navigateToAdmin" class="admin">Admin</h1>
        </header>
        <div class="divider"></div>
        <div class="options-container">
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
        </div>
    </div>
</template>

<style scoped>
header {
    margin-bottom: 10px;
    padding-top: 30px;
    display: flex;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
    color: rgba(255, 255, 255, 0.877);
}

header input {
    border: none;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 7px;
    color: rgba(255, 255, 255, 0.856);
}

.divider {
    background-color: rgba(255, 255, 255, 0.096);
    height: 2px;
    border-radius: 5px;
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}

.test {
    margin-left: auto;
    cursor: pointer;
    font-size: 20px;
    color: aqua;
}

.admin {
    cursor: pointer;
    font-size: 20px;
}
</style>