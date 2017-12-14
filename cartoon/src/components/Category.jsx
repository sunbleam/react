import React, {Component} from 'react'
import HeaderBar from '@/components/HeaderBar'
import axios from 'axios'
import './css/category.css'
export default class category extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      list: [],
      type: 'left'
    }
  }
  getList ({page = 0,pageSize = 10}) {
    axios.get('/api/category', {
      params: {
        id: this.props.match.params.key,
        page: page,
        pageSize: pageSize
      }
    }).then(res => {
      this.setState({
        data: res.data
      })
      this.setState({
        list: [...this.state.list, ...res.data.list]
      })
    })
  }
  componentDidMount () {
    this.getList({})
    document.addEventListener('scroll', () => {
      let doc = document.body.clientHeight
      let win = window.innerHeight
      let scrollTop = window.scrollY
      if ((win + scrollTop) >= doc) {
        this.getList({page: 1, pageSize: 10})
      }
    }, false)
  }
  render () {
    let {
      data,
      type,
      list
    } = this.state
    return (
      <div className="category">
        <HeaderBar 
          headerBar={data} 
          type={type}
          onBack={() => this.props.history.goBack()}
        ></HeaderBar>
        <div className="category-content">
           {data.list && list.map((v,k) => {
            return (
              <div className="category-list" key={k}>
                <div className="img">
                  <img src={v.img} alt=""/>
                </div>
                <div className="content">
                  <h4>{v.title}</h4>
                  <p>{v.type}</p>
                  <p>{v.info}</p>
                  <p>{v.num}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}