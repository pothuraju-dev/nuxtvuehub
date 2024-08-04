<template>
    <div class="text-center flex flex-col items-center">
        <div v-if="subtitle" class="mb-2 text-base/7 font-semibold text-primary">{{ subtitle }}</div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {{ title }}
        </h2>
        <div v-if="description" class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">{{ description }}</div>
        <slot />
    </div>
</template>
<script setup lang="ts">
defineProps<{
    title: string;
    subtitle?: string;
    description?: string;
}>()
</script>