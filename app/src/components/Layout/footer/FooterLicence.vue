<template>
    <div class="border-t border-gray-200 dark:border-gray-800">
        <div
            class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3">
            <div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3">
                <Button
                    class=" inline-flex items-center dark:bg-transparent">
                    <iconify-icon class="top-[50%] left-2.5 text-muted-foreground" aria-hidden="true" icon="lucide:moon"></iconify-icon>
                </Button>
                <a class=" inline-flex items-center dark:bg-transparent"
                    aria-label="GitHub" href="https://github.com/pothuraju-dev/nuxtvuehub" rel="noopener noreferrer"
                    target="_blank">
                    <iconify-icon class="top-[50%] left-2.5 text-muted-foreground" aria-hidden="true" icon="lucide:github"></iconify-icon>
                </a>
            </div>
            <div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"></div>
            <div class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
                <p class="text-gray-500 dark:text-gray-400 text-sm"> Copyright © 2024. All rights reserved. </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Button } from "@/components/ui/button"
</script>