<template>
    <div>
        <div class="gfund_wrapper">
            <router-view></router-view>
        </div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="cart" to="/GfundList">购买基金</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/MyFund" dot>我的基金</van-tabbar-item>
            <van-tabbar-item icon="records" info="5" to="/account">账户管理</van-tabbar-item>
            <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less" >
@import url("../../assets/style/index.less");
.gfund_wrapper {
  .van-tab {
    background: @nav_bg_color;
  }
}
.van-tabbar {
  background: @nav_bg_color;
}
.fund_op {
  .van-tabs__wrap {
    height: 5rem;
    .van-tab {
      >div{
        line-height: 0;
      }
      .van-icon {
        font-size: 2.2rem;
        margin-top: 0.8rem;
        p {
          font-size: 1rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
  .van-tabs__content{
      margin-top: 1.4rem;
  }
}
</style>

