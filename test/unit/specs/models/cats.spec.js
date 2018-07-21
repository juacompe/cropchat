import Cats from '@/models/Cats'

describe('Cats', () => {
  context('1 cat', () => {
    let cats

    beforeEach(() => {
      cats = new Cats([
        {
          '.key': '-LBZOnke3lTykosMxg1m',
          'comment': 'love',
          'created_at': -1525324135595,
          'info': 'Posted by Charles on Tuesday',
          'url': 'https://thecatapi.com/api/images/get.php?id=MTYzOTc2NQ'
        }
      ])
    })

    it('should have list', () => {
      expect(cats.list.length).to.equal(1)
    })

    describe('get', () => {
      it('return a cat according to the given catId', () => {
        let cat = cats.get('-LBZOnke3lTykosMxg1m')
        expect(cat.comment).to.equal('love')
      })
    })
  })
})
