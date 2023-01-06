<script setup>
import { defineProps } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
const { quiz } = defineProps(['quiz']);

const navigateToQuiz = () => {
    router.push(`/quiz/${quiz.id}`);
}

</script>

<template>
    <div class="card" @click="navigateToQuiz()">
        <img :src="quiz.img" alt="" />
        <div class="card-text">
            <h2>{{ quiz.title }}</h2>
            <p>{{ quiz.questions.length }} Questions</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
    background-color: rgb(36, 37, 37);
    transition: .5s;
}

.card:hover {
    box-shadow: 0px 0px 1px 2px rgba(255, 255, 255, 0.7);
}

.card img {
    width: 100%;
    height: 190px;
    margin: 0;
}

.card .card-text {
    padding: 0 15px;
}

.card .card-text h2 {
    font-weight: bold;
    color: white;
}

.card .card-text p {
    margin-bottom: 10px;
}
</style>