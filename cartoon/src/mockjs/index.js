import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import tabList from './data/tabList'
import category from './data/category'
let mock = new MockAdapter(axios)
mock.onGet('/api/tabList').reply(config => {
  return [200, tabList]
})
mock.onGet('/api/category').reply(config => {
console.log(category)
  let {
    id,
    page,
    pageSize
  } = config.params
  let array = {}
  array.title = category.category[id].title
  array.list= category.category[id].list.slice(page*pageSize, (page+1)*pageSize)
  return [200, array]
})