<template>
<nav class="navbar navbar-dark" style="background-color: rgba(0, 0, 0, 0.5);">
  <div class="container-fluid"><a class="navMain boldText" href="/">海獺的Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><span class="navbar-toggler-icon"></span></button>
    <div class="offcanvas offcanvas-end" id="offcanvasNavbar" tabindex="-1" aria-labelledby="offcanvasNavbarLabel" style="background-color: rgba(0, 0, 0, 0.5);">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title navMain boldText" id="offcanvasNavbarLabel">海獺的Blog</h5>
        <button class="btn-close text-reset" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item"><a class="nav-link active navTitle" href="/">首頁</a></li>
          <li class="nav-item"><a class="nav-link active navTitle" href="/resource">資源</a></li>
          <li class="nav-item"><a class="nav-link active navTitle" href="/aboutme">關於我</a></li>
          <li class="nav-item"><a class="nav-link active navTitle" href="/newArticle">新增文章</a></li>
          <li class="nav-item"><a class="nav-link active navTitle" href="/newgalgamearticle">新增GALGAME文章</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>