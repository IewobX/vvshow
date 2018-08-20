import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Me from '@/components/Me'
import Cart from '@/components/Cart'
import SignUp from '@/components/Me/signup/SignUp'
import ForgetPwd from '@/components/Me/forgetPwd/forgetPwd'
import ProductDetails from  '@/components/ProductDetails/ProductDetails'
import AddressMessage from '@/components/Me/addressMessage/AddressMessage'
import OperateAddress from '@/components/Me/operateAddress/OperateAddress'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify,
      children: [
        {path: '/Classify/:category', name: 'categoryName', component: ProductDetails}
      ]
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me,
    },
    {
      path: '/AddressMessage',
      name: 'AddressMessage',
      component: AddressMessage
    },
    {
      path: '/OperateAddress',
      name: 'OperateAddress',
      component: OperateAddress
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/forgetPwd',
      name: 'forgetPwd',
      component: ForgetPwd
    }
  ]
})
