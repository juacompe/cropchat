import CatAPI from '@/service/catapi'
export default class {
  constructor (view) {
    this.view = view
    this.catUrl = ''
  }
  init () {
    CatAPI.getRandomCatUrl(this.view.$http)
      .then(url => { this.catUrl = url })
  }
  postCat () {
    this.view.pushNewCat({
      url: this.catUrl,
      comment: this.title,
      info: 'Posted by Charles on Tuesday',
      created_at: -1 * new Date().getTime()
    }).then(this.view.backToHome)
  }
}
