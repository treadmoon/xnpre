<template>
  <div class="gfundlist_wrapper">
    <van-list class="gfund_head">
      <van-cell>
        <van-row gutter="20">
          <van-col span="11">基金名称</van-col>
          <van-col span="7">单位净值/元</van-col>
          <van-col span="6">日涨幅</van-col>
        </van-row>
      </van-cell>
    </van-list>
    <van-tabs @click="switchType" sticky class="i_tabs">
      <van-tab v-for="item in gfundtype" :title="item.tname">
        <van-list class="gfunlist" v-model="loading" :finished="finished" @load="onLoad" v-if="item.code==activecode">
          <van-cell v-for="(citem,index) in list" :key="index" class="gfun_item">
            <van-row gutter="20">
              <van-col span="11" class="fname">
                {{citem.fname}}
                <p>{{item.tname}}:{{citem.fcode}}</p>
              </van-col>
              <van-col span="7" class="num_info">
                {{citem.fworth}}
              </van-col>
              <van-col span="6" class="num_info">
                {{citem.frate}}
              </van-col>
            </van-row>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gfundtype: [
        { tname: "全部", code: 1 },
        { tname: "股票型", code: 2 },
        { tname: "债券型", code: 3 },
        { tname: "货币型", code: 4 },
        { tname: "混合型", code: 5 },
        { tname: "指数型", code: 6 },
        { tname: "QDII", code: 7 }
      ],
      list: [],
      loading: false,
      finished: false,
      activecode: 1
    };
  },
  methods: {
    switchType(index, title) {
      this.activecode = this.gfundtype[index].code;
    },
    onLoad() {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          for (let i = 0; i < 4; i++) {
            this.list.push({
              fname: "小牛新财富混合经济基金",
              fworth: "1.000",
              frate: "2.9456%",
              fcode: 9000
            });
          }

          this.loading = false;
          resolve(this.list.length);
          return;
        }, 500);
      }).then(res => {
        if (res >= 20) {
          this.finished = true;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/style/index.less");
.gfundlist_wrapper {
  .gfund_head {
    font-size: 1.2rem;
    position: fixed;
    top: 3.5rem;
    z-index: 1;
    width: 100%;
    box-shadow: 0 0 0.2rem 0.1rem #bbb;
    .van-cell::after {
      border: none;
    }
  }
  .van-tab__pane {
    margin-top: 3.6rem;
  }
  .gfun_item {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    border: 0.1rem solid #eee;
    box-shadow: 0 0 1rem 1rem #fff;
    .fname {
      font-size: 1rem;
      p {
        font-size: 0.8rem;
        line-height: 0.8rem;
        color: #999;
        padding-bottom: 0.1rem;
      }
    }
    .num_info {
      font-size: 1.4rem;
      color: #ff6700;
      padding: 0.5rem;
    }
  }
}
</style>

