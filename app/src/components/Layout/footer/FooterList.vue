<template>
    <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">{{ heading }}</h3>
    <ul role="list" class="mt-6 space-y-4">
        <li v-for="link in links">
            <RouterLink to="link.to">{{ link.text }}</RouterLink>
        </li>
    </ul>
</template>
<script setup lang="ts">

defineProps<{
    heading: string;
    links: {
        text: string;
        to: string;
    }[]
}>()
</script>