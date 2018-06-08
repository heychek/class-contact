const isStrNull = (str) => {
  return (typeof (str) === 'undefined' || str === null || str === '')
}

const isObjNull = (obj) => {
  return (typeof (obj) === 'undefined' || obj === null || JSON.stringify(obj) === '{}')
}

const emojiToString = (str) => {
  let regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi

  return str.replace(regStr, '-')
}

const dateFormate = (dateStr, fmt) => {
  if (dateStr === '') {
    return ''
  }
  const date = new Date(dateStr)
  let fmt_ = fmt
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  if (/(y+)/.test(fmt_)) {
    fmt_ = fmt_.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt_)) {
      fmt_ = fmt_.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      )
    }
  }
  return fmt_
}

const getPageName = path => {
  var index = path.lastIndexOf("\/");
  const res = path.substring(index + 1, path.length);
  return res
}

module.exports = {
  isStrNull,
  isObjNull,
  emojiToString,
  dateFormate,
  getPageName
}
