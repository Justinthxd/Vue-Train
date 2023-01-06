<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router"

const { results } = defineProps(['results']);

const router = useRouter();
</script>

<template>
    <div class="results">
        <p>Your results:</p>
        <h1>
            {{ results }}
        </h1>
        <button @click="router.push('/')">Home</button>
    </div>
</template>

<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 30px;
}

h1 {
    font-size: 100px;
}

button {
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 7px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.582);
    color: white;
    border: none;
    background-color: rgb(177, 175, 45);
}

button:hover {
    background-color: rgb(131, 128, 34);
}
</style>