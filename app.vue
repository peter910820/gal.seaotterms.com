<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <NavBar />
  <div class="row">
    <div class="col-9">
      <NuxtPage />
    </div>
    <div class="col-3">
      <SideBar />
    </div>
  </div>
</template>
