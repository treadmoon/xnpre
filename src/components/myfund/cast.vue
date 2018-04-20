<template>
    <div class="cast_wrapper">
        <van-list>
            <van-cell class="cast_card" v-for="index in 3">
                <van-row class="cast_info">
                    <van-col span="20">
                        <h4 class="text-over">大成蓝筹稳健证券投资基金（090003）</h4>
                        <p>扣款方式：招商银行（尾号525）</p>
                    </van-col>
                    <van-col span="4">
                        <div class="my_tag">正常</div>
                    </van-col>
                </van-row>
                <van-row class="cast_num">
                    <van-col span="12">
                        每周星期一定投：
                        <span>100.00元</span>
                    </van-col>
                    <van-col span="12">
                        下次扣款：
                        <span>2018-04-02</span>
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
.cast_wrapper {
  background: @nav_bg_color;
  .cast_card {
    margin-bottom: 0.8rem;
    padding-bottom: 0;
    &::after {
      border: none;
    }
    .cast_info {
      border-bottom: 0.1rem solid #eee;
      h4 {
        font-size: 1.3rem;
        margin-bottom: 0.4rem;
        margin-top: 0.5rem;
      }
      .my_tag {
        margin: auto;
      }
      p{
          color: #777;
      }
    }
    .cast_num {
      line-height: 3rem;
      color: #777;
      span {
        color: #ff6700;
      }
    }
  }
}
</style>

