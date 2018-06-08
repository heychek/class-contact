import grace from '../grace.js'
import { errhandler } from './errhandler.js'

const getsessionkey = (opt) => {
  return baseReq('test', opt)
}

const baseReq = (url, opt) => {
  return new Promise((resolve, reject) => {
    grace.http.get(url, opt)
      .then(res => {
        dealRes(res, {resolve, reject})  
      })
      .catch(err => {
        console.log('err', err)
        errhandler[`err${err.status}`](reject)
      })
  })
}

const dealRes = (res, backs) => {
  try {
    errhandler[`err${res.status}`](backs.reject)
  } catch (err) {
    backs.resolve(res)
  }
}

module.exports = {
  getsessionkey
}