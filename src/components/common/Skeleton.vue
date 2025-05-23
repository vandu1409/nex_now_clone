<template>
    <div class="card">
        <div class="rounded border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900">
            <div class="flex mb-4">
                <Skeleton width="100%" height="200px"></Skeleton>
            </div>
            <div class="px-4 py-4">
                <Skeleton width="15rem" class="mb-2"></Skeleton>
                <Skeleton width="15rem" class="mb-2"></Skeleton>
                <Skeleton width="5rem" class="mb-2"></Skeleton>
            </div>

        </div>
    </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';

</script>
