
<template>
    <div class="history_wrapper">
        <van-list>
            <van-cell class="history_card" v-for="index in 5">
                <van-collapse v-model="activeNames">
                    <van-collapse-item title="有赞微商城" :name="index">
                        <div slot="title">
                            <van-row>
                                <van-col span="4" class="trans_status">申购</van-col>
                                <van-col span="12" class="fund_name">
                                    大成货币市场基金
                                    <p>2017-05-89 19:42:35</p>
                                </van-col>
                                <van-col span="8">50000.00元</van-col>
                            </van-row>
                        </div>
                        <div class="history_detail">
                            <p>
                                <span>申请单号：</span> 201803260000000000838639</p>
                            <p>
                                <span>交易日期/状态：</span> 2018-03-26/待报</p>
                            <p>
                                <span>支付状态：</span> 支付成功</p>
                        </div>
                    </van-collapse-item>

                </van-collapse>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/index.less");
.history_wrapper {
  background: @nav_bg_color;
  .history_card {
    margin-bottom: 0.8rem;
    padding-top: 0;
    padding-bottom: 0;
    &::after {
      border: none;
    }
    .trans_status {
      color: #ff6700;
    }
    .fund_name {
      p {
        font-size: 0.8rem;
        line-height: 0.8rem;
        color: #999;
      }
    }
    .history_detail{
        p{
            span{
                color: #999;
            }
        }
    }
  }
}
</style>
