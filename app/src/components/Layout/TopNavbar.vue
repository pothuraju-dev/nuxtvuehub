<script setup lang="ts">
import Search from '@/components/ui/search/Search.vue'
import NavLinks from './NavLinks.vue'
import { Avatar } from '@/components/ui/avatar'

const links = [
    {
        title: 'Resources',
        to: '/resources',
    },
    {
        title: 'Interview Questions',
        to: '/interview-questions',
    }
]
</script>

<template>
    <nav class="h-16 border-b bg-muted/40 flex gap-2 justify-between px-6 items-center">
        <RouterLink to="/" class="flex justify-center items-center gap-2">
            <Avatar>
                <img src="@/assets/logo.svg" alt="@radix-vue" />
            </Avatar>
            <p class="text-3xl font-semibold">NuxtVue Hub</p>
        </RouterLink>
        <div class="flex justify-center items-center gap-8">
           <Search />
            <div  class="flex justify-center items-center gap-2">
                <NavLinks :links="links" orientation="horizontal" />
            </div>
        </div>
    </nav>
</template>