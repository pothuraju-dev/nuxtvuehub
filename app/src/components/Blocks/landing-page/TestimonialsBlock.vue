<template>
    <div class="py-24 sm:py-32">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
            <ContentSectionHeader title="What our customers are saying." subtitle="Testimonials"
                description="Proident sunt exercitation minim laborum enim laboris labore esse." />
            <div class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
                id="testimonials">
                <Testimonials v-for="testimonial in testimonials" :key="testimonial.name" v-bind="{ ...testimonial }" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Testimonials } from '@/components/ui/testimonial';
import { ContentSectionHeader } from '@/components/ui/content';
const testimonials = [
    {
        name: "Rose Roberson",
        position: "CEO",
        companyName: "Company",
        avatar: "https://i.pravatar.cc/120?img=1",
        testimonial: "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip",
    },
    {
        name: "Chace Rodgers",
        position: "CEO",
        companyName: "Company",
        avatar: "https://i.pravatar.cc/120?img=7",
        testimonial: "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation",
    },
    {
        name: "Cornelius Sheppard",
        position: "CEO",
        companyName: "Company",
        avatar: "https://i.pravatar.cc/120?img=3",
        testimonial: "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor. Esse incididunt cillum nostrud esse do quis amet labore amet nulla eiusmod amet nulla Lorem. Incididunt ex voluptate irure officia laboris ea proident est qui",
    },
    {
        name: "Destinee Woods",
        position: "CEO",
        companyName: "Company",
        avatar: "https://i.pravatar.cc/120?img=5",
        testimonial: "Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore. Officia irure nisi dolor dolore velit fugiat. Aliqua sint aliqua aute elit eu sunt.",
    },
    {
        name: "Kaleb Mccormick",
        position: "CEO",
        companyName: "Company",
        avatar: "https://i.pravatar.cc/120?img=8",
        testimonial: "Proident quis deserunt qui ex exercitation veniam id Lorem est cupidatat ipsum irure aliquip ad",
    },
    {
        name: "Jazmin Mccall",
        position: "CEO",
        companyName: "Company",
        avatar: "https://i.pravatar.cc/120?img=9",
        testimonial: "Magna officia quis ea ea in officia non voluptate ipsum culpa do labore sunt. Aute est dolore commodo sint officia ad laboris dolor magna aliquip exercitation tempor commodo",
    }
]
</script>