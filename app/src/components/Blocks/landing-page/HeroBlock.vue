<template>
    <div class="py-24 sm:py-32 md:py-40 relative">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
            <div class="text-center">
                <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
                    Your Central Hub for Mastering<br>Vue & Nuxt
                </h1>
                <div class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">Access all the resources,
                    interview prep, and integration tools you need, all in one place.</div>
                <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
                    <RouterLink
                        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                        to="/resources">
                        <span class="">Get started</span>
                        <iconify-icon icon="lucide:square-arrow-out-up-right"></iconify-icon>
                    </RouterLink>
                    <a class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                        href="https://github.com/pothuraju-dev/nuxtvuehub" rel="noopener noreferrer" target="_blank">
                        <iconify-icon icon="lucide:github"></iconify-icon>
                        <span class="">Use this template</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>