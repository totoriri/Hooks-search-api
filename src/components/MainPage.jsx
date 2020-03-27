import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';

import "./MainPage.scss";
import ModalWithTransitions from './Modal'
import Pagination from "./Pagination"
import GsapAnimation from "./GsapAnimation"

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  useEffect(() => {
    const fetchDefaultBooks = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=picture book+love+book&maxResults=36`
      );
      setBooks(response.data);
      setLoading(false);
      console.log(response.data);
    };

    fetchDefaultBooks();
  }, []);

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=love+${searchTerm}+picture book&maxResults=36`);
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

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = books.items.slice(indexOfFirstPost, indexOfLastPost);

  function pagiNate(number) {
    setCurrentPage(number);
    console.log(number)
  }

  return (
    <section id="MainPage">
      <nav>
            <h1>Logo</h1>
            <div className="nav-right">
                <Link to="/Collection" className="collection">Collection</Link>
                <PersonIcon />
            </div>
        </nav>
      <div className="top-area">
        <div className="category-title-animation">
          <GsapAnimation/>
        </div>
      <form onSubmit={onSubmitHandler}>
          <input
            type="search"
            placeholder="type any key word..."
            value={searchTerm}
            onChange={onInputChange}
          />
          <input type="submit" name="SUBMIT"/>
        </form>
      </div>
      <div className="search_result_container">
        <div className="book_results">
        {(loading) ? <h1>Loading...</h1>
          :
          <ul>
          {currentPosts.map((book, index) => {
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
                      <img
                      alt={`${book.volumeInfo.title} book`}
                      src={`http://books.google.com/books/content?id=${
                        book.id
                      }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                      />
                      <h3>{book.volumeInfo.title}</h3>
                      <p>{bookAuthors(book.volumeInfo.authors)}</p>
                        <p>{book.volumeInfo.publishedDate}</p>
                      <div className="modal-summury">
                        <h3>- SUMMURY -</h3>
                        <p>{book.volumeInfo.description}</p>
                      </div>
                    </ModalWithTransitions>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
          }
      </div>
      {/* <Posts posts={currentPosts} loading={loading} /> */}
      <Pagination
        pagiNate={number => pagiNate(number)}
        postPerPage={postPerPage}
        totalPosts={books.items.length}
        />
      </div>
    </section>
  );
};

export default MainPage;