<script setup lang="ts">
import { initMaterialSidenav } from "~/utils/initMaterial";
onMounted(() => {
  initMaterialSidenav();
});
</script>

<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid d-flex align-items-center">
      <a class="navbar-brand" href="#">Galgame交流站</a>

      <div class="d-flex flex-row-reverse align-items-center">
        <button class="button-submit ms-3" @click="$emit('open-login-modal')">登入</button>
        <a class="nav-link ms-3" href="#">文章一覽</a>
        <a class="nav-link active" aria-current="page" href="/">首頁</a>
      </div>

      <!-- hamburger -->
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- offcanvas 側邊欄 -->
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Galgame交流站</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">首頁</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">文章一覽</a>
            </li>
            <li class="nav-item">
              <button class="button-submit" @click="$emit('open-login-modal')">登入</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
