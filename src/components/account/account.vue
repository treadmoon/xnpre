<template>
    <div class="account_wrapper">
        <div class="head_card">
            <p>我的</p>
            <div class="img_box ">
                <img src="./ft.png" alt="" srcset="">
            </div>
            <div class="person_name">
                18948726762
            </div>
        </div>
        <van-list class="account_op">
            <van-cell class="account_item">
                <span>
                    <van-icon name="card"></van-icon>
                    银行卡管理
                </span>
                <van-icon name="arrow"></van-icon>
            </van-cell>
            <van-cell class="account_item">
                <span>
                    <van-icon name="coupon"></van-icon>
                    交易密码修改
                </span>
                <van-icon name="arrow"></van-icon>
            </van-cell>
            <van-cell class="account_item">
                <span>
                    <van-icon name="qr-invalid"></van-icon>
                    交易密码重置
                </span>
                <van-icon name="arrow"></van-icon>
            </van-cell>
            <van-cell class="account_item">
                <span>
                    <van-icon name="description"></van-icon>
                    投资者信息管理
                </span>
                <van-icon name="arrow"></van-icon>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("../../assets/style/index.less");
@base_lang: 4rem;
.account_wrapper {
  background: @nav_bg_color;
  .head_card {
    background: #38f;
    color: #fff;
    height: 14rem;
    text-align: center;
    .img_box {
      width: 8rem;
      height: 8rem;
      margin: auto;
      .circle_img;
    }
    p {
      text-align: left;
      padding: 1rem;
      font-size: 1.4rem;
    }
    .person_name {
      font-size: 1.6rem;
      margin-top: -2rem;
    }
  }
  .account_op {
    .account_item {
      font-size: 1.6rem;
      margin: 0.5rem 0;
      padding: 0 1rem;
      height: @base_lang;
      line-height: @base_lang;
      &::after {
        border: none;
      }
      span {
        color: #222;
        .van-icon {
          float: left;
          margin-right: 0.5rem;
          color: #38f;
          font-size: 1.8rem;
        }
      }
      .van-icon {
        line-height: @base_lang;
        float: right;
        color: #999;
        vertical-align: sub;
      }
    }
  }
}
</style>


