<template>
  <div class="right">
    <div class="notice">
      <h2>公告栏</h2>
      <div class="board">
        本站编辑于2020-08-05
        <br />
      </div>
    </div>
    <div class="note">
      <h2>笔记分类</h2>
      <div class="classify" :key="key" v-for="(val, key) in note_data">
        <h3>
          <img :src="key + '.png'" class="icon" />
          {{ key }}({{ val.length }})
        </h3>
        <ul class="note_ul">
          <a :href="v.href" target="_blank" v-for="(v, k) in val" :key="k">
            <li>{{ v.name }}</li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
let note_data = {
  html: [],
  css: [
    { name: "flex布局", href: "file:///D:/note/1.html" },
    { name: "background属性", href: "file:///D:/note/1.html" },
  ],
  js: [],
  python: [],
  java: [],
};
export default {
  data() {
    return {
      note_data: note_data,
    };
  },
  methods: {},
};
</script>

<style>
h3 {
  font-size: 30px;
  margin: 5px 10px;
  border-bottom: 1px solid blueviolet;
}
.notice {
  width: 100%;
  height: 150px;
  background-color: white;
  opacity: 0.7;
  margin-bottom: 20px;
  border-radius: 8px;
}

.board {
  color: grey;
  margin: 10px;
  font-size: 20px;
}

.note {
  width: 100%;
  height: 500px;
  background-color: white;
  opacity: 0.7;
  margin-bottom: 20px;
  border-radius: 8px;
}

.icon {
  vertical-align: middle;
}

.note_ul {
  display: none;
}

.note_ul li {
  color: #66ccff;
  margin-left: 40px;
  font-size: 25px;
  list-style: circle;
}

.classify:hover .note_ul {
  display: block;
}
</style>