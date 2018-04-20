<template>
    <div class="fund_list_wrapper">
        <van-list>
            <van-cell>
                <van-row class="fund_item" v-for="i in 5">
                    <van-col span="8" class="fund_item_l">
                        <h4>16.2500%</h4>
                        <p>近一年收益率</p>
                    </van-col>
                    <van-col span="16" class="fund_item_r">
                        <h5>小牛资本升级混合</h5>
                        <p>100元起投|中风险</p>
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
.fund_item {
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  border-bottom: 0.1rem solid #eee;
  padding: 0.5rem 0;
  p {
    font-size: 1rem;
    line-height: 1rem;
    margin: 0.3rem auto;
    color: #aaa;
  }
  .fund_item_l {
    border-right: 0.1rem solid #eee;
    h4 {
      color: #ff0000;
      font-size: 1.8rem;
    }
  }
  .fund_item_r {
    h5 {
      color: #555;
      font-size: 1.4rem;
    }
  }
}
</style>


