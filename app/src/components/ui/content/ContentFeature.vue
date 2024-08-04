<template>
    <div
        class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow">
        <div
            class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]">
            <div class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div class="">
                    <div class="mb-2 pointer-events-none">
                        <span class="iconify i-heroicons:cog w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"
                            aria-hidden="true" style=""></span>
                    </div>
                    <p class="text-gray-900 dark:text-white text-base font-bold truncate">{{ title }}</p>
                    <div class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">{{ description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    title: string;
    description: string
}>()
</script>
