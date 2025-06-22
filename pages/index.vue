<template>
  <div class="s4 article">
    <div class="article-image">
      <img src="https://fs.seaotterms.com/resource/image/ja_icon-milia-sd.png" />
    </div>
    <div class="article-content">這是標題</div>
    <div class="article-details">這是TAG之類的東東</div>
  </div>
</template>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  height: 350px;
  min-height: 350px;
  max-height: 350px;
  border: 2px solid white;
  border-radius: 20px;
}

.article-image {
  flex: 5;
  border: 0px solid transparent;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
}

.article-content {
  flex: 1;
  font-size: 30px;
  padding: 20px 10px 0px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.article-details {
  flex: 1;
  padding: 10px 10px 0px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
