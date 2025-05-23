<template>
    <div class="card w-full">
        <div
            class="rounded w-full flex flex-row border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900">
            <div class="flex mb-4">
                <Skeleton width="300px" height="200px"></Skeleton>
            </div>
            <div class="flex flex-grow px-4 py-4">
                <div class="flex flex-col">
                    <div>
                    <Skeleton width="36rem" class="mb-2"></Skeleton>
                    <Skeleton width="30rem" class="mb-2"></Skeleton>
                    <Skeleton width="30rem" class="mb-2"></Skeleton>
                </div>
                <div class="mt-24 flex flex-row justify-between">
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" height="1rem" class="mb-2"></Skeleton>
                </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';

</script>
