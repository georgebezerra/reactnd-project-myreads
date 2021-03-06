import React     from 'react'
import                './App.css'
import PropTypes from 'prop-types'
import { Link }  from 'react-router-dom'

export default class BooksApp extends React.Component {
  static propTypes = {
    books         : PropTypes.array.isRequired,
    bookEstantes  : PropTypes.func.isRequired,
    onChangeShelf : PropTypes.func.isRequired,
  }

  render() {
     const { books, bookEstantes, onChangeShelf} = this.props

     const  booksCR   = books.filter(book => book.shelf === 'currentlyReading')
     const  booksWR   = books.filter(book => book.shelf === 'wantToRead')
     const  booksRead = books.filter(book => book.shelf === 'read')

    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {booksCR.map((book) => (
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                <div className="book-shelf-changer">
                                  <select value={book.shelf} onChange={(event) => onChangeShelf(event, book)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors}</div>
                            </div>
                          </li>
                        ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {booksWR.map((book) => (
                              <li key={book.id}>
                                <div className="book">
                                  <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                    <div className="book-shelf-changer">
                                      <select value={book.shelf} onChange={(event) => onChangeShelf(event, book)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="book-title">{book.title}</div>
                                  <div className="book-authors">{book.authors}</div>
                                </div>
                              </li>
                            ))}
                      </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {booksRead.map((book) => (
                            <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                  <div className="book-shelf-changer">
                                    <select value={book.shelf} onChange={(event) => onChangeShelf(event, book)}>
                                      <option value="move" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                              </div>
                            </li>
                          ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                Search a book
              </Link>
            </div>
      </div>
    )
  }
}
