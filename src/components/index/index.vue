<template>
    <div class="index_wrapper">
        <van-swipe :autoplay="3000">
            <van-swipe-item>
                <img src="./1.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="./2.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="./1.png" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="person_head">
            <router-link to="/">登录</router-link>
        </div>
        <van-row class="index_nav">
            <van-col span="6">
                <router-link to="/Gfund">
                    <img src="./gfund.png" alt="" srcset="">
                    <p>公募</p>
                </router-link>
            </van-col>
            <van-col span="6">
                <router-link to="/Gfund">
                    <img src="./sfund.png" alt="" srcset="">
                    <p>私募</p>
                </router-link>
            </van-col>
            <van-col span="6">
                <router-link to="/Gfund">
                    <img src="./invest.png" alt="" srcset="">
                    <p>智投</p>
                </router-link>
            </van-col>
            <van-col span="6">
                <router-link to="/Gfund">
                    <img src="./vip.png" alt="" srcset="">
                    <p>会员</p>
                </router-link>
            </van-col>
        </van-row>
        <div class="panel_card">
            <div class="panel_card_title">
                <van-icon name="pending-payment" />
                <span>财富宝</span>
            </div>
            <div class="panel_card_info">
                <van-row class="cfb_wrapper">
                    <van-col span="24" class="cfb_t">
                        <h4>财富宝</h4>
                        <p>快速取现1秒到账！</p>
                    </van-col>
                    <van-col span="12" class="cfb_i">
                        <h4>4.025%</h4>
                        <p>7日年化</p>
                    </van-col>
                    <van-col span="12" class="cfb_i">
                        <h4>1.0125元</h4>
                        <p>万份收益</p>
                    </van-col>
                </van-row>
            </div>
        </div>
        <div class="panel_card">
            <div class="panel_card_title">
                <van-icon name="completed" />
                <span>推荐基金</span>
            </div>
            <div class="panel_card_info">
                <fund-list></fund-list>
            </div>
        </div>
    </div>
</template>

<script>
import fundList from "../fund/fundList";
export default {
  components: {
    fundList
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/index.less");
.index_wrapper {
  position: relative;
  .van-swipe {
    width: 100%;
    height: 15rem;
    .van-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .person_head {
    .circle_img;
    width: 3.6rem;
    height: 3.6rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    text-align: center;
    line-height: 3.3rem;
    font-size: 1.3rem;
    border: 0.3rem dashed #fff;
    a {
      color: #fff;
    }
  }
  .index_nav {
    margin-bottom: 1rem;
    .van-col {
      overflow: hidden;
      text-align: center;
      position: relative;
      margin-top: 1rem;
      a {
        font-size: 1.3rem;
        line-height: 1.35rem;
        color: #555;
        display: block;
        img {
          width: 3rem;
          margin: auto;
        }
      }
    }
  }
  .cfb_wrapper {
    color: #222;
    h4 {
      color: #ff0000;
    }
    .cfb_t {
      text-align: center;
      margin: 0.5rem auto;
    }
    .cfb_i {
      margin: 0.5rem auto;
      text-align: center;

      p {
        color: #777;
      }
    }
  }
}
</style>

