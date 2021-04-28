<template>
    <div>
        <van-cell title="选择入住日期" :value="date" @click="show = true" style="background:#ffeff2;height:60px;border-radius:5px;margin:10px;padding-top:20px;width:auto" />
        <i class="van-icon van-icon-arrow van-cell__right-icon" style="float:right;margin:-50px 20px"></i>
        <van-calendar v-model="show" type="range" @confirm="onConfirm" />
    </div>
</template>
<script>
export default {
   data() {
    return {
      date: '',
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
  }
}
</script>
<style lang="scss" scoped>
.van-cell__value{
    margin-right: 15px;
}
</style>