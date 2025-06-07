<script setup>
import HeaderV from "./components/HeaderV.vue"
import Footer from "./components/FooterV.vue"
</script>

<template>
      <HeaderV class="TheHeader" />
  <main style="margin-top: 280px;">
    <router-view />
  </main>

  <Footer />
</template>

