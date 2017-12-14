import React, {Component} from 'react'
import '../css/tabList.css'
export default class TabList extends Component {
  render () {
    let {
      listArray
    } = this.props
    return (
      <div>
         {listArray[0] && 
          listArray.map((item, key) => {
            return (
              <div key={key} className="list">
                <div className="list-title">
                  <img src={item.tabTitle.img} alt=""/>
                  <span>{item.tabTitle.title}</span>
                </div>
                <div className="list-content">
                  {item.list.map((v,k) => {
                    return (
                      <dl key={k}>
                        <dt><img src={v.img} alt=""/></dt>
                        <dd>
                          <p>{v.title}</p>
                          <p>{v.info}</p>
                        </dd>
                      </dl>
                    )
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}