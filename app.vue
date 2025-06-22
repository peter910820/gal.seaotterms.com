<script setup lang="ts">
declare const WOW: any;

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
  <NavBar />
  <div class="container">
    <div class="row main-row">
      <div class="col s12 m12 l12 xl9">
        <div class="row">
          <NuxtPage />
        </div>
      </div>
      <div class="col s12 m12 l12 xl3 sidebar-block">
        <AnnouncementBlock />
        <ModeratorBlock />
        <!-- <SideBar /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$selection-background-color: yellowgreen;
$selection-color: white;

::selection {
  background-color: $selection-background-color;
  color: $selection-color;
}

.container {
  min-width: 922px;
  width: 95% !important;
}

.main-row {
  .col {
    padding: 20px;
  }
}

.sidebar {
  max-width: 100%;
  height: 200px;
  max-height: 200px;
  min-height: 200px;
  border: 2px solid white;
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
