import { HTTP } from '../until/http-p.js'
class BookModel extends HTTP {
  data = null
   async getHotList() {
    return await this.request({
      url: 'book/hot_list',
    })
  }
  search(start, q) {
    return this.request({
      url: 'book/search?sumary=1',
      data: {
        q: q,
        start: start
      }
    })
  }
  getMyBookCount() {
    return this.request({
      url: 'book/favor/count',
    })
  }
  getDetail(bid) {
    return this.request({
      url: `book/${bid}/detail`
    })
  }

  getLikeStatus(bid) {
    return this.request({
      url: `book/${bid}/favor`
    })
  }

  getComments(bid) {
    return this.request({
      url: `book/${bid}/short_comment`
    })
  }
  postComment(bid, comment) {
    return this.request({
      url: 'book/add/short_comment',
      method: 'POST',
      data: {
        book_id: bid,
        content: comment
      }
    })
  }
}
export { BookModel }