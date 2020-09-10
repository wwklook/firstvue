<template>
  <div class="header">
    <div class="bar">
      <div class="home">
        <a href>
          <img src="home.png" />
        </a>
      </div>
      <div class="label">个人项目</div>
      <div class="label">个人笔记</div>
      <div class="label">个人追番</div>
      <div class="label">技巧合集</div>
      <div class="label">其他</div>
    </div>
    <div class="login">
      <img src="https://i0.hdslb.com/bfs/face/member/noface.jpg@150w_150h.jpg" />
      <div>登录</div>
      <div>注册</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  width: 100%;
  height: 100px;
  background: url(../../public/bg/header.jpg) no-repeat center;
  background-attachment: fixed;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 5px;
}
.label {
  margin-left: 30px;
  color: #7bbfea;
  font-size: 25px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.label:hover {
  color: #66ccff;
}
.home {
  margin-left: 15px;
  padding-right: 10px;
  border-right: 2px solid #66ccff;
}

.home img {
  width: 60px;
  height: 60px;
}
</style>