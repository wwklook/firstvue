<template>
  <div class="mine">
    <div class="name">
      <img src="https://i0.hdslb.com/bfs/face/member/noface.jpg@150w_150h.jpg" />
      <div>无聊look</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.mine {
  width: 100%;
  height: 250px;
  background-color: white;
  opacity: 0.7;
  margin-bottom: 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #66ccff;
  font-size: 25px;
  color: #66ccff;
}

.name img {
  margin-top: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>