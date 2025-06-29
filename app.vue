<script setup lang="ts">
declare const WOW: any;
declare const bootstrap: any;

function showModal() {
  const modal = new bootstrap.Modal(document.getElementById("loginModal"));
  modal.show();
}

onMounted(() => {
  // 檢查是否在客戶端環境
  if (import.meta.client) {
    if (typeof (window as any).WOW !== "undefined") {
      new (window as any).WOW().init();
    }
  }
});
</script>

<template>
  <div class="main dark-theme" data-bs-theme="dark">
    <NavBar @open-login-modal="showModal" />
    <div class="container">
      <div class="row main-row">
        <div class="col col-12 col-xl-9">
          <div class="row">
            <NuxtPage />
            <div class="modal fade" id="loginModal" aria-hidden="true" aria-labelledby="modalTitle" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalTitle">登入</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <LoginModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-12 col-xl-3 sidebar-block">
          <div class="row">
            <AnnouncementBlock />
            <ModeratorBlock />
            <!-- <SideBar /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "sass:map";

// selection
$selection-bg-color: yellowgreen;
$selection-color: white;

::selection {
  background-color: $selection-bg-color;
  color: $selection-color;
}

@mixin generate-theme($mode) {
  @each $key, $value in map.get($theme, $mode) {
    --#{$key}: #{$value};
  }
}

.dark-theme {
  @include generate-theme(dark);
}

.main {
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
}

.container {
  min-width: 922px;
  padding-top: 56px;
  width: 95% !important;
}

.main-row {
  .col {
    padding: 20px;
  }
}

.page {
  border: 2px solid var(--border-color);
  border-radius: 20px;
}

.sidebar {
  max-width: 100%;
  height: 200px;
  max-height: 200px;
  min-height: 200px;
  border: 2px solid var(--border-color);
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 20px;
}

.sidebar-announcement {
  @extend .sidebar;
}

.sidebar-moderator {
  @extend .sidebar;
  height: 300px;
  max-height: 300px;
  min-height: 300px;
}

@media screen and (max-width: 1200px) {
  .sidebar-block {
    display: none !important;
  }
}
</style>
