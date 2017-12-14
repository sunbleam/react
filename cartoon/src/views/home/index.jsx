import React, {Component} from 'react'
import HeaderBar from '@/components/HeaderBar'
// import Hot from '@/views/hot'
import 'antd-mobile/dist/antd-mobile.css'; 
import FooterBar from '@/components/FooterBar'
import Nav from '@/views/hot/components/Nav'
import {Route} from 'react-router-dom'
import Hot from '@/views/hot'
import New from '@/views/New'
export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      headerBar: {
        title: <img src="http://m.manmanapp.com/images/assets/logo.png" alt=""/>
      },
      type: '',
      footerBar: [
        {
          text: '首页',
          path: '/home'
        },
        {
          text: 'App下载',
          path: '/download'
        },
        {
          text: '投稿',
          path: '/contribute'
        },
        {
          text: '关于我们',
          path: '/user'
        },
        {
          text: '回顶部',
          path: '/home'
        }
      ],
      tabList: [{
        text: '热门',
        path: '/home/hot'
      },{
        text: '更新',
        path: '/home/new'
      }, {
        text: '分类',
        path: '/home/classify'
      }],
      navActive: 'active'
    }
  }
  render () {
    let {
      headerBar,
      footerBar,
      tabList,
      navActive,
      type
    } = this.state
    return (
      <div>
        <HeaderBar headerBar={headerBar} type={type}></HeaderBar>
        <nav>
          <Nav tabList={tabList} navActive={navActive}></Nav>
        </nav>
        <Route exact path="/home/hot" render={() => (<Hot/ >)}/>
        <Route exact path="/home/new" render={() => (<New/ >)}/>
        <FooterBar footerBar={footerBar}></FooterBar>
      </div>
    )
  }
}