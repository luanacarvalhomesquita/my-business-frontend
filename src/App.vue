<template>
    <div class="flex min-h-screen ">
        <Sidebar :isSidebarOpen="isSidebarOpen" @toggleSidebar="toggleSidebar" />
        <div class="flex flex-col flex-1 bg-form">
            <Navbar @toggleSidebar="toggleSidebar" />
            <DashboardPage />
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';
import DashboardPage from './pages/DashboardPage.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    DashboardPage,
    Footer,
  },
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>
