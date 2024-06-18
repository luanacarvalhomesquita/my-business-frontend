<template>
    <div class="flex gap-4 justify-center p-2 font-light">
        <div class="text-end">
            <h3 class="text-2xl text-primary-normal">R$ {{ item1.value }}</h3>
            <span class="font-gray-700">{{ item1.label }}</span>
        </div>
        <div class="ml-4 border-l border-gray-100 pl-8">
            <h3 class="text-2xl text-secondary-normal">R$ {{ item2.value }}</h3>
            <span class="font-gray-700">{{ item2.label }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    item1: {
        type: Object,
        default: {value: 0.0, label: 'Entrada'}
    },
    item2: {
        type: Object,
        default: {value: 0.0, label: 'Saída'}
    }
})

</script>
