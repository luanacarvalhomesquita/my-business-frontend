<template>
    <main class="flex-1 p-4 justify-center">
        <h1 class="text-2xl justify-center text-center py-12 text-black">Painel</h1>

        <div class="p-4 content-center flex justify-center items-center">
            <div class="container py-12 ">
                <div class="flex gap-4">
                    <div class="shadow-md shadow-primary-gray-50 rounded w-full bg-white p-4">
                        <BoxMultValues :item1="{value: 2035.10, label: 'Entrada'}" :item2="{value: 849.10, label: 'Saída'}" />
                    </div>
                    <div class="shadow-md shadow-primary-gray-50 rounded w-full bg-white p-4">
                        <BoxMultValues :item1="{value: 1025.10, label: 'Lucro'}" :item2="{value: 845.10, label: 'Investimento'}" />
                    </div>
                </div>
                <div class="shadow-md shadow-primary-gray-50 rounded w-full bg-white p-4 mt-4">
                    <BarChart :total="1000.00" label="Comissões" :data="{}"/>
                </div>
            </div>
        </div>

    </main>
</template>

<script setup>

import BoxMultValues from '../components/BoxMultValues.vue';
import BarChart from '../components/BarChart.vue';
</script>
