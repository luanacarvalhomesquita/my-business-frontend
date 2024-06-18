<template>
    <div class="flex gap-4 justify-center p-2 font-light">
        <div class="text-center">
            <h3 class="text-2xl text-primary-normal">R$ {{ total }}</h3>
            <span class="font-gray-700">{{ label }}</span>
        </div>
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
})

</script>
