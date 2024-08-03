<template>
    <div>
        <h1>Questions Page</h1>
        <RouterLink to="/">Home</RouterLink>
        <div v-for="question in questions" :key="question.id">
            <p>{{ question.question }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue'
import type { Tables } from '../../../database/types';

const questions = ref<Tables<'interview_questions'>[] | null>(null)

    ; (async () => {
        const { data, error } = await supabase
            .from('interview_questions')
            .select()

        if (error) console.log("error", error)

        questions.value = data
        console.log(questions)
    })()


</script>
<style lang="">

</style>