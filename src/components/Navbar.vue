<template>
    <nav class="bg-primary-normal p-4 flex xl:justify-between justify-center items-center">
        <div class="xl:hidden">
            <!-- Mobile menu button -->
            <button @click="$emit('toggleSidebar')" class="text-primary-light hover:bg-primary-normal-hover hover:text-primary-light-hover px-2 py-2 mx-8 rounded-md text-sm font-medium absolute left-0 top-2">
                <MenuIcon />
            </button>
        </div>
        <div>
            <span class="text-white text-lg font-semibold bg-gray">App Meu Negócio</span>
        </div>

        <div class="hidden xl:flex space-x-4 text-primary-light font-medium text-sm lg:text-md">
            <a href="#" class="flex p-2 bg-primary-normal-active items-center rounded">
                <DashboardIcon color-class="fill-primary-light-hover"/>
                <span class="ml-2 text-primary-light">Painel</span>
            </a>
            <a href="#" class="flex p-2 hover:bg-primary-normal-hover items-center rounded">
                <CalendarIcon color-class="fill-primary-light"/>
                <span class="ml-2">Registros</span>
            </a>
            <a href="#" class="flex p-2 hover:bg-primary-normal-hover items-center rounded">
                <CustomIcon color-class="fill-primary-light"/>
                <span class="ml-2">Personalizar</span>
            </a>
            <a href="#" class="flex p-2  hover:bg-primary-normal-hover items-center rounded">
                <UsersIcon color-class="fill-primary-light"/>
                <span class="ml-2">Colaboradores</span>
            </a>
            <a href="#" class="flex p-2 hover:bg-primary-normal-hover items-center rounded">
                <HistoryIcon color-class="fill-primary-light"/>
                <span class="ml-2">Histórico</span>
            </a>
            <a href="#" class="flex p-2 hover:bg-primary-normal-hover items-center rounded">
                <UserIcon color-class="fill-primary-light"/>
                <span class="ml-2">Minha Conta</span>
            </a>
            <a href="#" class="flex p-2 hover:bg-primary-normal-hover items-center rounded">
                <DubtIcon color-class="fill-primary-light"/>
                <span class="ml-2">Ajuda e Suporte</span>
            </a>
            <a href="#" class="flex p-2 hover:bg-primary-normal-hover items-center rounded">
                <LogoutIcon color-class="fill-primary-light"/>
                <span class="ml-2">Sair</span>
            </a>
        </div>
    </nav>
  </template>

<script>
import MenuIcon from './icons/MenuIcon.vue'
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
        MenuIcon,
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
    methods: {
        toggleMenu() {
            this.$emit('toggleSidebar');
        }
    }
};
</script>

