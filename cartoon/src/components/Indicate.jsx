import React, {Component} from 'react'
import { Icon } from 'antd-mobile'
import {NavLink} from 'react-router-dom'
export default class Indicate extends Component {
  render () {
    let {
      list,
      onChange,
      tabList
    } = this.props
    return (
      <div className="filter">
          <Icon 
            type="cross-circle" 
            size="lg" 
            className="wrong-number"
            onClick={() => {onChange()}}/
          >
          <div className="main">
            {list.map((v,k) => {
              return (
                <NavLink to={`/category/${k}`} key={k}>{v.text}</NavLink>
              )
            })}
            <div className="list">
              {tabList.map((v,k) => {
                return (
                  <NavLink to={v.path} key={k}>{v.text}</NavLink>
                )
              })}
            </div>
          </div>
        </div>
    )
  }
}