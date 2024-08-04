<template>
    <div class="mt-10 xl:mt-0">
        <form>
            <div class="" data-n-ids="{&quot;nL3srUbrZqd-0&quot;:&quot;nL3srUbrZqd-0&quot;}">
                <div>
                    <div class="flex content-center items-center justify-between text-sm">
                        <label for="nL3srUbrZqd-0" class="block font-medium text-gray-700 dark:text-gray-200">
                            Subscribe to our newsletter
                        </label>
                    </div>
                </div>
                <div class="relative mt-3">
                    <div class="relative max-w-sm">
                        <Input id="nL3srUbrZqd-0" value="" type="email" required placeholder="Enter your email"
                            class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-full placeholder-gray-400 dark:placeholder-gray-500 text-base px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pe-12"
                            autocomplete="off" />
                        <span class="absolute inset-y-0 end-0 flex items-center">
                            <Button type="submit"
                                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">
                                <span class="">Subscribe</span>
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
</script>