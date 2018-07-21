import { find } from 'lodash'
export default class Cats {
  constructor (list) {
    this.list = list
  }

  get (catId) {
    return find(this.list, (cat) => cat['.key'] === catId)
  }
}
