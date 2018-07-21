import parse from 'xml-parser'
export default {
  getRandomCatUrl ($http) {
    return $http
      .get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1')
      .then(this.parseUrlFromResponse)
  },
  parseUrlFromResponse (response) {
    return parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
  }
}
