<template>
  <div>
    <Navbar />
    <Header />
    <PopularUsers />
    <router-view />Î
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import PopularUsers from "@/components/PopularUsers.vue";

export default {
  components: {
    Navbar,
    Header,
    PopularUsers
  },
};
</script>
