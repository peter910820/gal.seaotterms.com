<script setup lang="ts">
import { initMaterialSidenav } from "~/utils/initMaterial";
onMounted(() => {
  initMaterialSidenav();
});
</script>

<template>
  <nav class="nav navbar" style="background-color: rgba(0, 0, 0, 0.5)">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">海獺的Galgame分享站</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/">首頁</a></li>
        <li><a href="/">資源</a></li>
        <li><a href="/">關於我</a></li>
        <li><a href="/">新增文章</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="/">首頁</a></li>
    <li><a href="/">資源</a></li>
    <li><a href="/">關於我</a></li>
    <li><a href="/">新增文章</a></li>
  </ul>
</template>
