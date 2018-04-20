import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Gfund from '@/components/gfund/gfund'
import GfundList from '@/components/gfund/GfundList'
import MyFund from '@/components/myfund/MyFund'
import account from '@/components/account/account'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/Gfund',
      name: 'Gfund',
      component: Gfund,
      children: [{
        path: '/',
        alias: '/GfundList',
        name: 'GfundList',
        component: GfundList
      }, {
        path: '/MyFund',
        name: 'MyFund',
        component: MyFund
      }, {
        path: '/account',
        name: 'account',
        component: account
      }]
    }
  ]
})
