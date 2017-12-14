import React, {Component} from 'react'
import './css/index.css'
import Tab from './components/Tab'
import Slider from './components/slider'
import TabList from './components/TabList'

import axios from 'axios'
export default class Hot extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tabBar: ['热门', '新作', '少女心', '古风美', '纯爱', '多口味', '完结'],
      tabActive: 'tab-active',
      listArray: {}
    }
  }
  componentDidMount () {
    axios.get('/api/tabList').then(res => {
      this.setState({
        listArray: res.data.tabList
      })
    })
  }
  render () {
    let {
      tabBar,
      tabActive,
      listArray
    } = this.state
    return (
      <div>
        <Slider></Slider>
        <div className="main">
          <div className="tab-bar">
            <Tab 
              tabList={tabBar}
              navActive={tabActive}></Tab>
          </div>
          <TabList listArray={listArray}></TabList>
        </div>
      </div>
    )
  }
}