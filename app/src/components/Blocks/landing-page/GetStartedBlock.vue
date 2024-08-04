<template>
    <div class="py-24 sm:py-32 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
            <ContentSectionHeader title="Get started today" description="Get started today">
                <div class="mt-10 flex items-center gap-x-6 justify-center"><button type="button"
                        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"><span
                            class="">Sign up for
                            free</span></button>
                </div>
            </ContentSectionHeader>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ContentSectionHeader } from '@/components/ui/content';

</script>