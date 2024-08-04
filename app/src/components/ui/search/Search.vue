<template>
    <form class="relative h-fit w-full max-w-96">
        <iconify-icon class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground"
            icon="lucide:search"></iconify-icon>
        <Input class="w-full pl-8 bg-background" type="text" placeholder="Search ..." />
    </form>
</template>
<script setup lang="ts">
import { Input } from "@/components/ui/input"
</script>
