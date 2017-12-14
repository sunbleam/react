import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './css/footerBar.css'
export default class FooterBar extends Component {
  render () {
    let {
      footerBar
    } = this.props
    return (
      <footer className="footer">
        {footerBar.map((v,k) => {
          return (
            <NavLink to={v.path} key={k}>{v.text}</NavLink>
          )
        })}
      </footer>
    )
  }
}