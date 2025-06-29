<template>
  <form>
    <div class="mb-3">
      <label for="emailOrUsername" class="form-label">Email或帳號名稱</label>
      <input type="text" class="form-control" id="emailOrUsername" aria-describedby="emailOrUsernameHelp" />
      <div id="emailOrUsernameHelp" class="form-text">請輸入註冊的Email或帳號名稱</div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
