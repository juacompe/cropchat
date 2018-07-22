import PostPresenter from '@/presenters/PostPresenter'
import flushPromises from 'flush-promises'
describe('PostPresenter', () => {
  let presenter
  beforeEach(() => {
    presenter = new PostPresenter()
  })
  context('constructor', () => {
    it('should have catUrl or the image would not display on post page', () => {
      expect(presenter.catUrl).to.equal('')
    })
  })
  describe('postCat', () => {
    it('should have url', () => {
      let view = input('catUrl', 'url')
      presenter.postCat()
      view.validate()
    })

    it('should have comment', () => {
      let view = input('title', 'comment')
      presenter.postCat()
      view.validate()
      flushPromises()
    })

    context('success', () => {
      let view
      it('should go back to home page', async () => {
        view = new MockBackToHome()
        presenter.view = view
        presenter.catUrl = 'url'
        presenter.title = 'title'
        presenter.postCat()
        await flushPromises()
        view.validate()
      })

      class MockBackToHome {
        constructor () { this.called = false }
        pushNewCat () { return Promise.resolve() }
        backToHome () { view.called = true }
        validate () {
          expect(this.called).to.equal(true)
        }
      }
    })
    function input (textField, jsonField) {
      let view = new StubPushNewCat(jsonField)
      presenter[textField] = view.expected
      presenter.view = view
      return view
    }
    class StubPushNewCat {
      constructor (field) {
        this.expected = 'expected'
        this.field = field
      }
      pushNewCat (newCat) {
        this.actual = newCat[this.field]
        return Promise.resolve()
      }
      validate () {
        expect(this.expected).to.equal(this.actual)
      }
    }
  })
})
