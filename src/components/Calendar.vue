<template>
  <div class="calendar">
    <div id="calendars">
      <h4>{{ nowTime }}</h4>

      <ul class="calendar-header">
        <li v-for="item1 in week" :key="item1">{{ item1 }}</li>
      </ul>
      <ul class="calendar-main">
        <li
          v-for="item2 in lastWeekDay"
          class="disabled"
          :key="item2+100"
        >{{ lastMonthSize - lastWeekDay + item2 }}</li>
        <li
          v-for="item3 in monthList[month - 1]"
          :key="item3"
          :class="{ currentDay: item3 === day }"
        >{{ item3 }}</li>
        <li v-for="item4 in nextWeekDay" class="disabled" :key="item4+50">{{ item4 }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
function toTime(m) {
  if (m < 10) {
    m = "0" + m;
  }
  return m;
}

export default {
  data() {
    return {
      week: ["日", "一", "二", "三", "四", "五", "六"],
      monthList: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      nowTime: "",
    };
  },
  computed: {
    lastWeekDay() {
      let firstDay = new Date(this.year, this.month - 1, 1).getDay();
      return firstDay === 7 ? 0 : firstDay;
    },
    nextWeekDay() {
      let lastDay = new Date(
        this.year,
        this.month - 1,
        this.monthList[this.month - 1]
      ).getDay();
      return lastDay === 7 ? 6 : 6 - lastDay;
    },
    lastMonthSize() {
      return this.month - 1 === 0 ? 31 : this.monthList[this.month - 2];
    },
    nextMonthSize() {
      return this.month + 1 === 13 ? 31 : this.monthList[this.month];
    },
  },
  created: function () {
    if (
      (this.year % 4 === 0 && this.year % 100 !== 0) ||
      this.year % 400 === 0
    ) {
      this.monthList[1] = 29;
    } else {
      this.monthList[1] = 28;
    }
    let self = this;
    setInterval(function () {
      let date = new Date();
      self.nowTime =
        date.getFullYear() +
        "年" +
        (date.getMonth() + 1) +
        "月" +
        date.getDate() +
        "日 " +
        toTime(date.getHours()) +
        ":" +
        toTime(date.getMinutes()) +
        ":" +
        toTime(date.getSeconds());
    }, 1000);
  },
};
</script>

<style>
.calendar {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #66ccff;
  border-radius: 8px;
  margin-bottom: 20px;
  padding-bottom: 15px;
}
.calendar h4 {
  background-color: #66ccff;
  opacity: 0.5;
  margin: 0;
}
#calendars {
  min-width: 330px;
  max-width: 330px;
  border-radius: 10px;
}
#calendars ul {
  display: flex;
  list-style: none;
  background: white;
  flex-wrap: wrap;
}
#calendars li {
  width: 35px;
  height: 35px;
  padding: 0 3px;
  line-height: 35px;
  align-items: center;
  text-align: center;
  border: 2px solid white;
  border-radius: 50%;
}
#calendars h4 {
  font-size: 18px;
  line-height: 36px;
  width: 330px;
  text-align: center;
}
#calendars li:hover {
  border: 2px solid #66ccff;
}
.calendar-header {
  opacity: 0.8;
}
.calendar-main {
  opacity: 0.7;
}
.disabled {
  color: grey;
}
.currentDay {
  background: #66ccff;
}
</style>