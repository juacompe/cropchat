import CatAPI from '@/service/CatAPI'

describe('CatAPI', () => {
  describe('parseUrlFromResponse', () => {
    it('should return url', () => {
      let response = createResponseWithBody(`
      <response>
        <data>
        <images>
          <image>
            <url>https://thecatapi.com/api/images/get.php?id=9ea</url>
            <id>9ea</id>
            <source_url>http://thecatapi.com/?id=9ea</source_url>
          </image>
        </images>
        </data>
      </response>`)
      let url = CatAPI.parseUrlFromResponse(response)
      expect(url).to.equal('https://thecatapi.com/api/images/get.php?id=9ea')
    })

    function createResponseWithBody (responseBody) {
      return { 'body': responseBody }
    }
  })
})
