<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import Question from "../components/Question.vue";
import Result from '../components/Result.vue'
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();

const quizId = parseInt(route.params.id);

const currentQuestionIndex = ref(0);

const numberOfCorrectAnswers = ref(0);

const quiz = quizes.find(q => q.id === quizId);

const showResults = ref(false);

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);

const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`);

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }

    currentQuestionIndex.value++;

    if (quiz.questions.length === currentQuestionIndex.value) {
        showResults.value = true;
    }

}

</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <div>
            <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected" />
            <Result v-else :results="`${numberOfCorrectAnswers}/${quiz.questions.length}`" />
        </div>
    </div>
</template>

<style scoped>

</style>