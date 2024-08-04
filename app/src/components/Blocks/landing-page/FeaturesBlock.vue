<template>
    <div class="py-24 sm:py-32">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
            <ContentSectionHeader title="Why choose our service?" subtitle="Features"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
                id="features">
                <ContentFeature v-for="feature in features" :key="feature.title" :title="feature.title"
                    :description="feature.description" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ContentSectionHeader, ContentFeature } from '@/components/ui/content';

const features = [
    {
        title: "Easy to use",
        description: "Id laborum laboris duis nostrud excepteur ut velit nulla magna Lorem proident non.",
    },
    {
        title: "Reliable",
        description: "Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim.",
    },
    {
        title: "Secure",
        description: "Proident nostrud excepteur sint ut culpa consectetur aute adipisicing non anim ullamco.",
    },
    {
        title: "Fast",
        description: "Qui reprehenderit nostrud dolore nisi ad fugiat labore eiusmod sint aliquip nisi voluptate.",
    },
    {
        title: "Affordable",
        description: "Reprehenderit fugiat elit in do ipsum ut pariatur.",
    },
    {
        title: "Scalable",
        description: "Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est.",
    },
]</script>