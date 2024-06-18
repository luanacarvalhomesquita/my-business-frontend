<template>
    <BoxSingleValue :total="total" :label="label"/>
    <div class="flex text-center justify-center py-4">
        TODO: Chart
    </div>
</template>

<script setup>
import BoxSingleValue from './BoxSingleValue.vue';

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
