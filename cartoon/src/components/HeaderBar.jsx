import { NavBar, Icon } from 'antd-mobile';
import React, {Component} from 'react'
import './css/headerBar.css'
import Indicate from './Indicate'
export default class HeaderBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      flag: false,
      list: [{text: '古风'}, {text:'校园'}, {text:'恋爱'}, {text:'搞笑'}, {text:'暖萌'}, {text:'剧情'}, {text:'日常'}, {text: '奇幻'}],
      tabList: [{
        text: '热门',
        path: '/home/hot'
      },{
        text: '更新',
        path: '/new'
      }, {
        text: '分类',
        path: '/classify'
      }]
    }
  }
  change () {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    let {
      headerBar,
      type,
      onBack
    } = this.props
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type={type} />}
          onLeftClick={() =>onBack()}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" onClick={this.change.bind(this)}/>,
          ]}
        >{headerBar.title}</NavBar>
        {this.state.flag && 
          <Indicate 
            onChange={this.change.bind(this)} 
            list={this.state.list}
            tabList={this.state.tabList}></Indicate>
        }
      </div>
    )
  }
}