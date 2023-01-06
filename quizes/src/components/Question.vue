<script setup>
import { defineProps, defineEmits } from "vue";

const { question } = defineProps(['question']);

const emit = defineEmits(['selectOption']);

const emitSelectedOption = (isCorrect) => {
    emit('selectOption', isCorrect);
}

</script>

<template>
    <div>
        <div class="question-container">
            <h1 class="question">
                {{ question.text }}
            </h1>
        </div>
        <div class="options-container">
            <div v-for="option in question.options" :key="option.id" class="option"
                @click="emitSelectedOption(option.isCorrect)">
                <p class="option-label">{{ option.label }}</p>
                <div class="option-value">
                    <p>{{ option.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: rgba(221, 199, 173, 0.774);
    color: rgba(0, 0, 0, 0.685);
    height: 50px;
    width: 50px;
    font-size: 30px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px 0px 0px 7px;
}

.option-value {
    background-color: rgba(244, 239, 239, 0.144);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
    border-radius: 0px 7px 7px 0px;

}
</style>