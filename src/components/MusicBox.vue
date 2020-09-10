<template>
  <div class="music">
    <div>
      <h2>音乐盒</h2>
    </div>
    <div class="info">
      <img
        class="img"
        src="https://h5static.kuwo.cn/upload/image/4f768883f75b17a426c95b93692d98bec7d3ee9240f77f5ea68fc63870fdb050.png"
        @click="paused"
      />
      <div class="song">
        <div :title="music_list[index].name + ' - ' + music_list[index].artist">
          <span id="sname">{{ music_list[index].name }}</span>
          <span>-</span>
          <span id="sartist">{{ music_list[index].artist }}</span>
        </div>
        <div id="time">
          <input
            type="range"
            id="slider"
            max="50"
            min="0"
            step="0.1"
            value="0"
            @change="change"
            @input="input"
          />
          {{ time }}
        </div>
        <div class="lrc">
          <p
            v-for="(item,index) in lrclist"
            :key="index"
            :class="{lrc_current: lrcindex == index}"
          >{{ item.lineLyric }}</p>
        </div>
      </div>
    </div>
    <div id="p_list">
      <ul class="p_ul">
        <li
          v-for="(val, key) in music_list"
          @click="play(key)"
          :key="key"
          :class="[{choose: index==key}, key%2==1?'odd':'even']"
        >
          <div class="song_num">{{ key + 1 }}</div>
          <div class="song_name">{{ val.name }}</div>
          <div class="song_artist">{{ val.artist }}</div>
        </li>
      </ul>
    </div>
    <audio
      :src="url"
      @ended="end"
      @loadstart="start"
      @loadedmetadata="metadata"
      @timeupdate="update"
    ></audio>
  </div>
</template>

<script>
let music_data = [
  { name: "破茧", artist: "张韶涵", url: "./music/破茧.mp3" },
  {
    name: "雨だれの歌",
    artist: "水瀬いのり&久保ユリカ",
    url: "./music/雨だれの歌.mp3",
  },
  { name: "牵丝戏", artist: "银临&Aki阿杰", url: "./music/牵丝戏.mp3" },
  { name: "Time After Time", artist: "倉木麻衣", url: "./music/Time After Time.mp3" },
  {
    name: "僕が死のうと思ったのは",
    artist: "中島美嘉",
    url: "./music/僕が死のうと思ったのは.mp3",
  },
  { name: "LOSER", artist: "米津玄師", url: "./music/LOSER.mp3" },
  {
    name: "secret base _君がくれたもの",
    artist: "茅野愛衣&戸松遥&早見沙織",
    url: "./music/secret base _君がくれたもの.mp3",
  },
  { name: "Love Story", artist: "Taylor Swift", url: "./music/Love Story.mp3" },
];

export default {
  data() {
    return {
      music_list: music_data,
      url: "",
      index: 0,
      time: "00:00/00:00",
      isClickSlider: false,
      isPlaying: false,
      lrclist: [
        { lineLyric: "破茧 - 张韶涵", time: "0.22" },
        { lineLyric: "词：曹德智/郭德紫毅", time: "0.89" },
        { lineLyric: "曲：文颖秋", time: "1.22" },
        { lineLyric: "制作人：赵瑟", time: "1.38" },
        { lineLyric: "编曲：文颖秋/赵瑟", time: "1.93" },
        { lineLyric: "配唱制作人：杨钧尧", time: "2.47" },
        { lineLyric: "录音师：潘尧泓", time: "2.77" },
        { lineLyric: "录音室：白金录音室", time: "3.0" },
        { lineLyric: "吉他：齐成刚", time: "3.3" },
        { lineLyric: "和声编写：文颖秋", time: "3.47" },
        { lineLyric: "和声：杜婧荧", time: "4.45" },
        { lineLyric: "弦乐：国际首席爱乐乐团", time: "4.65" },
        { lineLyric: "弦乐监制：李朋", time: "5.32" },
        { lineLyric: "混音 Mixed by：李天野@北京有沐音乐", time: "5.8" },
        {
          lineLyric: "母带 Mastered by：Randy Merrill@Sterling Sound",
          time: "6.3",
        },
        { lineLyric: "出品：腾讯音乐娱乐集团", time: "6.56" },
        { lineLyric: "如果在噩梦中睁眼", time: "12.04" },
        { lineLyric: "直面着残忍的世界", time: "14.49" },
        { lineLyric: "风拨动了谁的心弦", time: "17.09" },
        { lineLyric: "留恋却来不及告别", time: "19.76" },
        { lineLyric: "如果结局仅剩惨烈", time: "22.48" },
        { lineLyric: "无惧在逆风中破茧", time: "25.18" },
        { lineLyric: "就算那羽翼被撕裂", time: "27.81" },
        { lineLyric: "重回到十九层深渊", time: "30.34" },
        { lineLyric: "牵你手 往前走", time: "31.93" },
        { lineLyric: "黑夜白昼 不停留", time: "37.26" },
        { lineLyric: "辗转时空", time: "41.88" },
        { lineLyric: "会挫伤 会心痛", time: "43.36" },
        { lineLyric: "依然奋勇 去战斗", time: "47.94" },
        { lineLyric: "才叫英雄", time: "52.89" },
        { lineLyric: "抬头 乱与战不休", time: "54.09" },
        { lineLyric: "回首 你在我左右", time: "56.51" },
        { lineLyric: "击溃 命运的诅咒", time: "59.05" },
        { lineLyric: "让故事不朽", time: "62.63" },
        { lineLyric: "武魂 在放肆狂涌", time: "64.49" },
        { lineLyric: "守护 你一腔孤勇", time: "67.37" },
        { lineLyric: "哪怕 未来如洪流", time: "69.87" },
        { lineLyric: "也不曾退后", time: "73.58" },
        { lineLyric: "如果在噩梦中睁眼", time: "78.69" },
        { lineLyric: "直面着残忍的世界", time: "81.24" },
        { lineLyric: "风拨动了谁的心弦", time: "83.88" },
        { lineLyric: "留恋却来不及告别", time: "86.41" },
        { lineLyric: "如果结局仅剩惨烈", time: "89.19" },
        { lineLyric: "无惧在逆风中破茧", time: "91.65" },
        { lineLyric: "就算那羽翼被撕裂", time: "94.41" },
        { lineLyric: "重回到十九层深渊", time: "96.95" },
        { lineLyric: "牵你手 往前走", time: "99.14" },
        { lineLyric: "黑夜白昼 不停留", time: "103.9" },
        { lineLyric: "辗转时空", time: "108.479996" },
        { lineLyric: "会挫伤 会心痛", time: "109.92" },
        { lineLyric: "依然奋勇 去战斗", time: "114.619995" },
        { lineLyric: "才叫英雄", time: "119.57" },
        { lineLyric: "抬头 乱与战不休", time: "120.73" },
        { lineLyric: "回首 你在我左右", time: "123.2" },
        { lineLyric: "击溃 命运的诅咒", time: "125.81" },
        { lineLyric: "让故事不朽", time: "129.61" },
        { lineLyric: "武魂 在放肆狂涌", time: "131.24" },
        { lineLyric: "守护 你一腔孤勇", time: "133.89" },
        { lineLyric: "哪怕 未来如洪流", time: "136.5" },
        { lineLyric: "也不曾退后", time: "140.24" },
        { lineLyric: "当现实无路可逃", time: "141.9" },
        { lineLyric: "绝望将希望缠绕", time: "144.53" },
        { lineLyric: "也依旧无所谓地笑", time: "147.20999" },
        { lineLyric: "左锤护右手的草", time: "152.58" },
        { lineLyric: "双生的烈焰出鞘", time: "155.24" },
        { lineLyric: "绝处逢生见招拆招", time: "157.85" },
        { lineLyric: "抬头 乱与战不休", time: "163.41" },
        { lineLyric: "回首 你在我左右", time: "165.94" },
        { lineLyric: "击溃 命运的诅咒", time: "168.51" },
        { lineLyric: "让故事不朽", time: "172.15" },
        { lineLyric: "武魂 在放肆狂涌", time: "173.82" },
        { lineLyric: "守护 你一腔孤勇", time: "176.47" },
        { lineLyric: "哪怕 未来如洪流", time: "179.17" },
        { lineLyric: "也不曾退后", time: "182.81" },
        { lineLyric: "当现实无路可逃", time: "184.85" },
        { lineLyric: "绝望将希望缠绕", time: "187.25" },
        { lineLyric: "也依旧无所谓地笑", time: "189.84" },
        { lineLyric: "左锤护右手的草", time: "195.25" },
        { lineLyric: "双生的烈焰出鞘", time: "197.88" },
        { lineLyric: "绝处逢生见招拆招", time: "200.52" },
        { lineLyric: "也不曾退后", time: "204.29001" },
      ],
      lrcindex: 0,
    };
  },
  methods: {
    play: function (key) {
      this.index = key;
      this.isPlaying = true;
      console.log(process.env.BASE_URL);
      this.url = this.music_list[key].url;
    },
    nextSong: function () {
      if (this.index < this.music_list.length - 1) {
        this.index += 1;
      } else {
        this.index = 0;
      }
      this.url = this.music_list[this.index].url;
    },
    end: function () {
      this.nextSong();
    },
    update: function () {
      let num = this.lrclist.length - 1;
      let audio = document.querySelector("audio");
      let slider = document.querySelector("#slider");
      for (let i = 0; i < this.lrclist.length; i++) {
        if (audio.currentTime <= this.lrclist[i]["time"]) {
          num = i - 1;
          break;
        }
      }
      if (num != this.lrcindex) {
        this.lrcindex = num;
        let lrc = document.querySelector(".lrc");
        animate(lrc, { scrollTop: num * 22 });
      }
      this.time = toTime(audio.currentTime) + "/" + toTime(audio.duration);
      if (this.isClickSlider == false) {
        slider.value = (audio.currentTime / audio.duration) * 50;
        slider.style.backgroundSize = slider.value / 0.5 + "% 100%";
      }
    },
    start: function () {
      this.time = "00:00/00:00";
    },
    metadata: function () {
      if (this.isPlaying) {
        let audio = document.querySelector("audio");
        audio.play();
      } else {
        this.paused();
      }
    },
    change: function () {
      this.isClickSlider = false;
      let audio = document.querySelector("audio");
      let slider = document.querySelector("#slider");
      audio.currentTime = (slider.value * audio.duration) / 50;
    },
    input: function () {
      let slider = document.querySelector("#slider");
      this.isClickSlider = true;
      slider.style.backgroundSize = slider.value / 0.5 + "% 100%";
    },
    paused: function () {
      if (this.url == "") {
        return;
      }
      let audio = document.querySelector("audio");
      if (this.isPlaying) {
        this.isPlaying = false;
        audio.pause();
      } else {
        this.isPlaying = true;
        audio.play();
      }
    },
  },
};
function toTime(x) {
  let m = parseInt(x / 60); // 分
  let s = parseInt(x % 60); // 秒
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  return m + ":" + s;
}

function animate(obj, json, fn) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var flag = true;
    for (var k in json) {
      if (k === "opacity") {
        var leader = getComputedStyle(obj, null)[k] * 100;
        var tag = json[k] * 100;
        var step = (tag - leader) / 15;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        obj.style[k] = leader / 100;
      } else if (k === "scrollTop") {
        var leader = obj[k];
        var tag = json[k];
        var step = (tag - leader) / 15;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        obj[k] = leader;
      } else {
        var leader = parseInt(getComputedStyle(obj, null)[k]) || 0;
        var tag = json[k];
        var step = (tag - leader) / 15;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        obj.style[k] = leader + "px";
      }
      if (leader !== tag) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(obj.timer);
      if (fn) {
        fn();
      }
    }
  }, 15);
}
</script>

<style>
h2 {
  font-size: 36px;
  margin: 5px 10px;
  border-bottom: 1px solid blueviolet;
}
.music {
  width: 100%;
  height: 550px;
  background-color: white;
  opacity: 0.7;
  border-radius: 8px;
}
.img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 5px 5px;
}

.song {
  width: 100%;
  margin: 5px 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.song div {
  white-space: nowrap;
  overflow: hidden;
  max-width: 250px;
}

#sname {
  font-size: 18px;
}

#sartist {
  font-size: 15px;
  color: grey;
}

#time {
  font-size: 14px;
  color: grey;
}

.lrc {
  height: 50px;
  -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.lrc p {
  margin: 1px;
}

.lrc_current {
  color: #66ccff;
}

.p_ul {
  height: 350px;
  overflow-y: auto;
}

.p_ul li {
  height: 34px;
  line-height: 34px;
  display: flex;
  border-bottom: 1px solid #66ccff;
  margin: 0 5px;
  cursor: pointer;
}

.p_ul li:hover {
  background-color: #7bbfea;
}

.p_ul li div {
  white-space: nowrap;
  overflow: hidden;
  max-width: 150px;
}

.p_ul::-webkit-scrollbar {
  display: none;
}

.song_num {
  text-align: center;
  width: 15%;
}

.song_name {
  width: 50%;
}

.song_artist {
  width: 35%;
}

.odd {
  background-color: #90d7ec;
}

.even {
  background-color: #94d6da;
}

.choose {
  background-color: #76becc;
}

.info {
  display: flex;
}

.info input[type="range"] {
  -webkit-appearance: none;
  width: 50%;
  height: 4px;
  border-radius: 2px;
  background: -webkit-linear-gradient(#5cdee4, #5cdee4) no-repeat, #82a5a3;
  background-size: 0% 100%;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb,
-moz-range-thumb {
  -webkit-appearance: none;
  width: 0px;
  height: 0px;
  border: 0;
  background: #66ccff;
  background-size: cover;
}

input[type="range"]::-ms-fill-lower {
  -webkit-appearance: none;
  background: #82a5a3;
}
</style>