import axios from "axios";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const News = ({ query, date }) => {
  // console.log(date);
  const pageSize = 10; // number of items to display per page

  let url = `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=popularity&apiKey=edf744321191485e9a67684b9d537d6b`;
  // console.log(query);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [query, url, date]);

  // calculate the index of the first and last items to display
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  // function to handle page change
  const pagechnge = (pgno) => {
    setCurrentPage(pgno);
  };

  return (
    <>
      {/* <Navigation /> */}

      <div className="container">
        <h1 className="text-capitalize mt-2" style={{ fontSize: "20px" }}>
          :- {query}&nbsp; News
        </h1>
        {currentItems.map((item, key) => {
          return (
            <div
              className="row bg-light text-dark mb-2 mt-3 border-dark "
              key={key}
            >
              <div className="card-body col-md-8 ">
                <h5 className="card-title">{item.title}</h5>

                <p
                  // maxLength="10"
                  style={{
                    display: "block",
                    width: "81px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textoverflow: "ellipsis",
                  }}
                >
                  {item.publishedAt}
                </p>
                <p className="card-text">{item.description}</p>
                <a
                  href={item.url}
                  className="card-link stretched-link"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
              <img
                className="card-img-top col-md-4"
                src={item.urlToImage}
                alt="No image"
              />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {news.length > pageSize &&
              Array(Math.ceil(news.length / pageSize))
                .fill()
                .map((item, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <Button
                      variant="outline-light"
                      onClick={() => pagechnge(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  </li>
                ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default News;