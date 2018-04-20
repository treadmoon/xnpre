<template>
    <div class="myfund_wrapper">
        <van-row class="info_panel">
            <van-col span="24" class="person_item_all">
                0.04
                <p>总资产（元）</p>
            </van-col>
            <van-col class="person_item van-hairline--right" span="8">
                100.00
                <p>昨日收益（元）</p>
            </van-col>
            <van-col class="person_item van-hairline--right" span="8">
                2000.00
                <p>持有收益（元）</p>
            </van-col>
            <van-col class="person_item" span="8">
                5692.00
                <p>累计收益（元）</p>
            </van-col>
        </van-row>
        <van-tabs v-model="active" class="fund_op" sticky>
            <van-tab>
                <div slot="title">
                    <van-icon name="gold-coin">
                        <p>我的资产</p>
                    </van-icon>
                </div>
                <my-count></my-count>
            </van-tab>
            <van-tab>
                <div slot="title">
                    <van-icon name="exchange-record">
                        <p>修改分红</p>
                    </van-icon>
                </div>
                <bonus></bonus>
            </van-tab>
            <van-tab>
                <div slot="title">
                    <van-icon name="sign">
                        <p>定投计划</p>
                    </van-icon>
                </div>
                <cast></cast>
            </van-tab>
            <van-tab>
                <div slot="title">
                    <van-icon name="records">
                        <p>历史委托</p>
                    </van-icon>
                </div>
                <history></history>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import myCount from "./myCount";
import bonus from "./bonus";
import cast from "./cast";
import history from "./history";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    myCount,
    bonus,
    cast,
    history
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/index.less");
.myfund_wrapper {
  .info_panel {
    background: #38f;
    color: #fff;
    text-align: center;
    padding: 0.5rem 0;
    .person_item_all {
      font-size: 2.4rem;
      padding: 2rem 0;
    }
    .person_item {
      font-size: 1.3rem;
      position: relative;
    }
    p {
      font-size: 1rem;
      color: #ebebeb;
    }
  }
  .van-tabs--line {
    padding-bottom: 3.3rem;
  }
}
</style>

