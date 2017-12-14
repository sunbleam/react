import React, {Component} from 'react'
import '../css/Tab.sass'
export default class Tab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      changeActive: '热门'
    }
  }
  onChangeActive (e) {
    this.setState({
      changeActive: e.target.innerText
    })
  }
  render () {
    let {
      tabList,
      navActive
    } = this.props
    let {
      changeActive
    } = this.state
    return (
      <div className="tab-list">
        {tabList.map((v,k) => {
          return (
            <span 
              key={k}
              onClick={this.onChangeActive.bind(this)} 
              className={changeActive === v ? navActive : ''}
              >{v}</span>
          )
        })}
      </div>
    )
  }
}