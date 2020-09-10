<template>
  <div id="app">
    <div class="main">
      <header></header>
      <div class="left">
        <proflie></proflie>
        <calendar></calendar>
        <music-box></music-box>
      </div>
      <router-view></router-view>
      <div class="right">
        <right></right>
      </div>
    </div>
  </div>
</template>

<script>
import MusicBox from "./components/MusicBox";
import Proflie from "./components/Proflie";
import Calendar from "./components/Calendar";
import Right from "./components/Right";
import Header from "./components/Header";
export default {
  components: {
    MusicBox,
    Proflie,
    Calendar,
    Right,
    Header
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0 auto;
  background: url(../public/bg/bg.jpg) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  user-select: none;
  -webkit-user-seletct: none;
  -moz-user-seletct: none;
  -ms-user-seletct: none;
}
ul {
  padding: 5px;
  margin: 0;
}
li {
  list-style: none;
} 
.main {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
}
.left {
  min-width: 250px;
  margin: 20px;
  flex-grow: 0.1;
}
.right {
  min-width: 250px;
  margin: 20px;
  flex-grow: 0.1;
}
</style>
