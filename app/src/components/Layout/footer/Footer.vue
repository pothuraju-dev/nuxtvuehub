<template>
    <footer class="relative">
        <div class="border-t border-gray-200 dark:border-gray-800">
            <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-16"><!--[--><!--[-->
                <div class="xl:grid xl:grid-cols-3 xl:gap-8"><!---->
                    <div class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2"><!--[-->
                        <div v-for="column in footerColumns">
                            <FooterList :heading="column.heading" :links="column.links" />
                        </div>
                    </div>
                    <FooterNewsletterSubscribe />
                </div>
            </div>
        </div>
        <FooterLicence />
    </footer>
</template>
<script setup lang="ts">
import FooterLicence from "./FooterLicence.vue"
import FooterList from './FooterList.vue'
import FooterNewsletterSubscribe from "./FooterNewsletterSubscribe.vue";

const footerColumns = [
    {
        heading: "Resources",
        links: [
            {
                text: "Help Center",
                to: "/resources/help-center"
            },
            {
                text: "Docs",
                to: "/resources/docs"
            },
            {
                text: "Roadmap",
                to: "/resources/roadmap"
            },
            {
                text: "Changelog",
                to: "/resources/changelog"
            },
        ]
    },
    {
        heading: "Features",
        links: [
            {
                text: "Affiliates",
                to: "/features/affiliates"
            },
            {
                text: "Portal",
                to: "/features/portal"
            },
            {
                text: "Jobs",
                to: "/features/jobs"
            },
            {
                text: "Changelog",
                to: "/features/sponsors"
            },
        ]
    },
    {
        heading: "Company",
        links: [
            {
                text: "About",
                to: "/company/about"
            },
            {
                text: "Pricing",
                to: "/company/pricing"
            },
            {
                text: "Careers",
                to: "/company/careers"
            },
            {
                text: "Blog",
                to: "/company/blog"
            },
        ]
    },
]
</script>