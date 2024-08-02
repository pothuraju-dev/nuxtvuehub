<template>
    <div>
        <h1>Home Page</h1>
        <RouterLink :to="{ name: '/resources/[id]', params: { 'id': 1 } }">Got to resources 1</RouterLink>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="">

</style>