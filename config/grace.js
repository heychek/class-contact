import grace from './requst/httpConfig.js'
import { lifeLoger } from './mixin/pagemixin.js'

const page = grace.page;

grace.page = (ob) => {
  lifeLoger(ob)
  page.call(grace, ob)
}

export default grace;