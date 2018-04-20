<template>
    <div class="mycount_wrapper">
        <van-list>
            <van-cell class="mycount_card">
                <h4 class="card_title">
                    <van-icon name="pending-payment" />
                    <span>财富宝</span>
                    <van-icon class="left-arrow" name="arrow" />
                </h4>
                <van-row class="card_info">
                    <van-col span="12">
                        <span>1500.00</span>
                        <p>持有资产（元）</p>
                    </van-col>
                    <van-col span="12">
                        <span>80.00</span>
                        <p>昨日收益（元）</p>
                    </van-col>
                </van-row>
            </van-cell>
            <van-cell class="mycount_card" v-for="index in 1">
                <h4 class="card_title">
                    <van-icon name="points" />
                    <span>基金产品</span>
                    <van-icon class="left-arrow" name="arrow" />
                </h4>
                <van-row class="card_info">
                    <van-col span="12">
                        <span>500.00</span>
                        <p>持有资产（元）</p>
                    </van-col>
                    <van-col span="12">
                        <span>20.00</span>
                        <p>昨日收益（元）</p>
                    </van-col>
                </van-row>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("../../assets/style/index.less");
.mycount_wrapper {
    background: @nav_bg_color;
  .mycount_card {
    margin: 0.5rem 0;
    .card_title {
      line-height: 2rem;
      color: #555;
      .van-icon {
        vertical-align: middle;
      }
      .left-arrow {
        float: right;
        color: #aaa;
      }
    }
    .card_info {
      padding: 1rem 0 0.5rem;
      .card_info_note;
    }
  }
}
</style>
