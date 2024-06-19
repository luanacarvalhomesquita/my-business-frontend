<template>
    <main class="flex-1 p-4 justify-center">
        <h1 class="text-2xl justify-center text-center py-12 text-black">Painel</h1>

        <div class="p-4 content-center flex justify-center items-center">
            <div class="container py-12 ">
                <div class="flex gap-4">
                    <div class="shadow-md shadow-primary-gray-50 rounded w-full bg-white p-4">
                        <BoxMultValues
                            :item1="{value: registers.input_total, label: 'Entrada'}"
                            :item2="{value: registers.output_total, label: 'Saída'}"
                        />
                    </div>
                    <div class="shadow-md shadow-primary-gray-50 rounded w-full bg-white p-4">
                        <BoxMultValues
                            :item1="{value: registers.profit_total, label: 'Lucro'}"
                            :item2="{value: registers.investment_total, label: 'Investimento'}"
                        />
                    </div>
                </div>
                <div class="shadow-md shadow-primary-gray-50 rounded w-full bg-white p-4 mt-4">
                    <BarChart
                        :total="registers.commission_total"
                        label="Comissões"
                        :data="registers.commission_by_worker"
                    />
                </div>
            </div>
        </div>

    </main>
</template>

<script setup>

import BoxMultValues from '../components/Dashboard/BoxMultValues.vue';
import BarChart from '../components/Dashboard/BarChart.vue';

import { onMounted, ref } from "vue"
import { getAllRegisters } from "../http/dashboard-api"

const registers = ref([])

onMounted(async () => {
    const { data } = await getAllRegisters()
    registers.value = data
})
</script>
