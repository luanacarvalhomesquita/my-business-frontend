<template>
    <div :class="['fixed sm:overflow-x-hidden  inset-y-0 left-0 transform transition-transform duration-300 ease-in-out', { '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }]" class="bg-white text-black w-64">
        <!-- Button for close sidebar -->
        <div class="flex w-full justify-end p-4 items-center">
            <button @click="$emit('toggleSidebar')" class="text-primary-light hover:bg-primary-light-hover hover:text-primary-light-hover px-3 py-2 rounded-md text-sm font-medium ">
                <BackIcon />
            </button>
        </div>

        <!-- Logo App -->
        <div class="pb-4 flex justify-center">
            <LogoIcon />
        </div>

        <h2 class="text-center font-medium">Olá, Conceito!</h2>

        <!-- Options -->
        <nav class="my-4 text-gray-700 font-light">
            <a href="#" class="flex p-4 bg-primary-normal rounded">
                <DashboardIcon color-class="bg-primary-light"/>
                <span class="ml-4 text-primary-light">Painel</span>
            </a>
            <a href="#" class="flex p-4 hover:bg-primary-light-hover rounded">
                <CalendarIcon />
                <span class="ml-4">Registros</span>
            </a>
            <a href="#" class="flex p-4 hover:bg-primary-light-hover rounded">
                <CustomIcon />
                <span class="ml-4">Personalizar</span>
            </a>
            <a href="#" class="flex p-4  hover:bg-primary-light-hover rounded">
                <UsersIcon />
                <span class="ml-4">Colaboradores</span>
            </a>
            <a href="#" class="flex p-4 hover:bg-primary-light-hover rounded">
                <HistoryIcon />
                <span class="ml-4">Histórico</span>
            </a>
            <a href="#" class="flex p-4 hover:bg-primary-light-hover rounded">
                <UserIcon />
                <span class="ml-4">Minha Conta</span>
            </a>
            <a href="#" class="flex p-4 hover:bg-primary-light-hover rounded">
                <DubtIcon />
                <span class="ml-4">Ajuda e Suporte</span>
            </a>
            <a href="#" class="flex p-4 hover:bg-primary-light-hover rounded">
                <LogoutIcon />
                <span class="ml-4">Sair</span>
            </a>
        </nav>
    </div>
  </template>

<script >
import BackIcon from './icons/BackIcon.vue'
import LogoIcon from './icons/LogoIcon.vue'
import DashboardIcon from './icons/DashboardIcon.vue'
import CalendarIcon from './icons/CalendarIcon.vue'
import CustomIcon from './icons/CustomIcon.vue'
import UsersIcon from './icons/UsersIcon.vue'
import HistoryIcon from './icons/HistoryIcon.vue'
import UserIcon from './icons/UserIcon.vue'
import DubtIcon from './icons/DubtIcon.vue'
import LogoutIcon from './icons/LogoutIcon.vue'

export default {
    components: {
        BackIcon,
        LogoIcon,
        DashboardIcon,
        CalendarIcon,
        CustomIcon,
        DubtIcon,
        HistoryIcon,
        UserIcon,
        UsersIcon,
        LogoutIcon,
    },
    props: {
        isSidebarOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleMenu() {
        this.$emit('toggleSidebar');
    }
  }
};
</script>


