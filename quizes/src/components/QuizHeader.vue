<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const {
    questionStatus,
    barPercentage
} = defineProps([
    'questionStatus',
    'barPercentage'
]);

</script>

<template>
    <div class="header">
        <header>
            <h4>Question {{ questionStatus }}</h4>
            <div class="bar">
                <div class="completion" :style="{ width: barPercentage }"></div>
            </div>
        </header>
        <button @click="router.back()" class="close">Close</button>
    </div>
</template>

<style scoped>
header {
    padding-top: 20px;
}

header h4 {
    font-size: 30px;
}

.bar {
    width: 200px;
    height: 20px;
    border: 3px solid rgb(216, 216, 216);
    border-radius: 7px;
}

.completion {
    height: 100%;
    width: 0%;
    background-color: rgb(177, 175, 45);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close {
    height: 30px;
    margin-top: 30px;
    margin-right: 50px;
    cursor: pointer;
    justify-self: center;
    border: none;
    border-radius: 5px;
    outline-style: outset;
    outline-width: 2px;
    outline-color: rgb(99, 99, 99);
    background-color: transparent;
    color: white;
    font-size: 17px;
    font-weight: 800;
    transition: .2s;
}
</style>