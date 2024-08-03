<template>
    <div>
        <h1>Home Page</h1>
        <RouterLink :to="{ name: '/resources/[id]', params: { 'id': 1 } }">Got to resources 1</RouterLink>
        <br>
        <RouterLink to="/resources">Resources</RouterLink>
        <RouterLink to="/interview-questions">Interview Questions</RouterLink>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="">

</style>