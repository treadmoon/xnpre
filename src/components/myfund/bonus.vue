<template>
    <div class="bonus_wrapper">
        <van-list>
            <van-cell class="bonus_card" v-for="index in 15">
                <van-row>
                    <van-col span="24" class="fund_name">
                        大成蓝筹稳健证券投资基金（09008）
                    </van-col>
                    <van-col span="8" class="card_info_note">
                        <span>1.0500</span>
                        <p>净值</p>
                    </van-col>
                    <van-col span="8" class="card_info_note">
                        <span>现金分红</span>
                        <p>分红方式</p>
                    </van-col>
                    <van-col span="8">
                        <van-button type="danger" size="small">修改分红</van-button>
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
.bonus_wrapper {
  background: @nav_bg_color;
  .bonus_card {
    margin-bottom: 0.8rem;
    .fund_name {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }
    .van-button{
        float: right;
    }
  }
}
</style>


