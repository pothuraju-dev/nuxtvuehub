<script setup lang="ts">
defineProps<{
    element: string;
    ariaLabel?: string;
    isDisabled?: boolean;
}>();
</script>

<script lang="ts">
</script>

<template>
    <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled">
        <slot></slot>
    </component>
</template>