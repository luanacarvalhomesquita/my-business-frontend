<template>
    <BoxSingleValue :total="total" :label="label"/>
    TODO
</template>

<script setup>
import BoxSingleValue from './BoxSingleValue.vue';

const props = defineProps({
    total: {
        type: Number,
        default: 0
    },
    label: {
        type: String,
        default: ''
    },
    data: {
        type: Array,
        default: () => []
    }
})

</script>
