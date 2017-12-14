import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import '../css/nav.css'
export default class Nav extends Component {
  render () {
    let {
      tabList,
      navActive
    } = this.props
    return (
      <div className="nav">
        {tabList.map((v,k) => {
          return (
            <NavLink 
              to={v.path} 
              activeClassName={navActive}
              key={k}>{v.text}</NavLink>
          )
        })}
      </div>
    )
  }
}