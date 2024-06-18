<template>
    <div class="flex gap-4 justify-center p-2 font-light">
        <div class="text-center">
            <h3 class="text-2xl text-primary-normal">R$ {{ total }}</h3>
            <span class="font-gray-700">{{ label }}</span>
        </div>
    </div>
    <div class="flex text-center justify-center py-4">
        TODO: Chart
    </div>
</template>

<script setup>
defineProps({
    total: {
        type: Number,
        default: 0
    },
    label: {
        type: String,
        default: ''
    },
    chartData: {
        type: Object,
        default: () => {}
    }
})

</script>
