<script setup lang="ts">
interface LinkProp {
  title: string
  to: string
  icon?: string
}

withDefaults(defineProps<{
  links: LinkProp[]
  orientation?: 'vertical' | 'horizontal'
}>(), {
  orientation: 'vertical',
})
</script>

<template>
  <RouterLink exactActiveClass="text-primary bg-muted" v-for="link in links" :key="link.title" :to="link.to"
    class="flex items-center px-4 py-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground">
    <iconify-icon v-if="link.icon" :icon="link.icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
  </RouterLink>
</template>