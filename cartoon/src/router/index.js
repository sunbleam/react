import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from '@/views/home'
import category from '@/components/Category'
class router extends Component {
  render () {
    return (
      <Router>
        <Switch>
          {/* <Redirect to="/home"/> */}
          <Route path="/home" render={() => (<Home/>)}/>
          {/* <Route exact path="/home" render={() => (
            <Redirect to="/home/hot"/>
          )}></Route> */}
          <Route exact path="/category/:key" component={category} />
        </Switch>
      </Router>
    )
  }
}
export default router