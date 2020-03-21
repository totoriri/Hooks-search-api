import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./MainPage.scss";
import ModalWithTransitions from './Modal'


const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [show, setShow] = useState(false)
  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}+picture book&maxResults=30`);
    setBooks(result.data);
    console.log(result.data)
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  const bookAuthors = authors => {
    // if (authors.length <= 2) {
    //   authors = authors.join(" and ");
    // } else if (authors.length > 2) {
    //   let lastAuthor = " and " + authors.slice(-1);
    //   authors.pop();
    //   authors = authors.join(", ");
    //   authors += lastAuthor;
    // }
    return authors;
  };

  return (
    <section　id="MainPage">
      <form onSubmit={onSubmitHandler}>
          <input
            type="search"
            placeholder="type any key word..."
            value={searchTerm}
            onChange={onInputChange}
          />
          <input type="submit" name="SUBMIT"/>
      </form>
      <div className="search_result_container">
        <ul>
          {books.items.map((book, index) => {
            return (
              <li key={index}>
                <div　className="book_item">
                  <img
                    alt={`${book.volumeInfo.title} book`}
                    src={`http://books.google.com/books/content?id=${
                      book.id
                    }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                  />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{bookAuthors(book.volumeInfo.authors)}</p>
                    <p>{book.volumeInfo.publishedDate}</p>
                    <ModalWithTransitions
                      activator={({ setShow }) => (
                        <button
                          className="modal-open-btn"
                          type="button"
                          onClick={() => setShow(true)}
                        >
                          READ MORE
                        </button>
                      )}
                    >
                      Transitions, oh baby!
                    </ModalWithTransitions>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MainPage;