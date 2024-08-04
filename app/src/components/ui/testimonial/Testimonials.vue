<template>
    <div class="break-inside-avoid">
        <div
            class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative">
            <div class="flex flex-col px-4 py-5 sm:p-6">
                <div>
                    <q class="text-gray-600 dark:text-gray-300">
                        {{ testimonial }}
                    </q>
                    <div class="flex items-center gap-3 mt-6 relative">
                        <span v-if="avatar"
                            class="relative inline-flex items-center justify-center flex-shrink-0 rounded-full h-10 w-10 text-base">
                            <img class="rounded-full h-10 w-10 text-base" :alt="name" :src="avatar" loading="lazy">
                        </span>
                        <div>
                            <p class="font-semibold text-gray-900 dark:text-white text-sm">{{ name }}</p>
                            <p class="text-gray-500 dark:text-gray-400 text-sm">{{ position }} at {{ companyName }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    name: string,
    position: string,
    companyName: string,
    avatar: string,
    testimonial: string
}>()
</script>
