import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import classes from "./News.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

// NEWS Component and highest priotity to client
// Fetch api
// Map on buttons
// Map and sort on news card
function News() {
  const [news, setNews] = useState([]);
  const [listing, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataList = () => {
    setIsLoading(true);

    return fetch("https://api.npoint.io/d275425a434e02acf2f7")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.News.sort(function (x, y) {
          if (x.publishedDate > y.publishedDate) {
            return -1;
          }
          if (x.publishedDate < y.publishedDate) {
            return 1;
          }
          return 0;
        });
        setLists(data.News);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchDataList();
  }, []);

  const fetchData = () => {
    return fetch("https://api.npoint.io/91298d970c27e9a06518")
      .then((response) => response.json())
      .then((data) => {
        setNews(data.newsCategory);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFiltredCat(listing);
  }, [listing]);

  const [filteredCat, setFiltredCat] = useState(null);
  useEffect(() => {
    setFiltredCat(setLists());
  }, []);

  function filteredCategory(typecat) {
    let filteredCategory = listing?.filter(
      (type) => type.categoryID === typecat
    );

    return filteredCategory;
  }

  function handleCategory(e) {
    let typeCategory = e.target.id;
    typeCategory !== ""
      ? setFiltredCat(filteredCategory(typeCategory))
      : setFiltredCat(listing);
  }

  return (
    <>
      <p className="mt-5">Media</p>
      <h2 className="mb-5">Top News</h2>

      <div className="m-5">
        <Button
          value="all"
          variant=""
          className={classes["btn-bgg"]}
          onClick={handleCategory}
        >
          All News
        </Button>
        {news?.map((idx) => (
          <Button
            id={idx.id}
            variant=""
            className={classes["btn-bgg"]}
            onClick={handleCategory}
          >
            {idx.name}
          </Button>
        ))}
      </div>

      <>
        <div className="container card-section" xs={1} lg={3}>
          {
            <div className="row justify-content-center">
              {isLoading ? (
                <p>loading ... </p>
              ) : filteredCat > "1" ? (
                ""
              ) : (
                <p>No news Available</p>
              )}

              {filteredCat?.map((list) => {
                if (list.showOnHomepage === "yes") {
                  const date = format(
                    new Date(list.publishedDate),
                    "EEE dd MMM yyyy"
                  );
                  const showCat = news.map((getid) => {
                    if (getid.id == list.categoryID) return getid.name;
                  });
                  //  const rec = list.publishedDate.sort((date1, date2) => date1 - date2);

                  return (
                    <Card
                      className=" extraCard col-lg-3"
                      style={{ width: "" }}
                      id={list.categoryID}
                    >
                      <Card.Img
                        variant="top"
                        src={list.urlToImage}
                        alt="Image"
                      />
                      <Card.Body>
                        <Card.Title className="textTitle">
                          {list.title}
                        </Card.Title>
                        <Card.Text></Card.Text>
                        <small className="text-muted d-flex">
                          <FaRegCalendarAlt
                            className="m-1"
                            style={{ color: "#0aceff" }}
                          />
                          {date}
                        </small>

                        <div
                          style={{ color: "#0aceff" }}
                          className="d-flex justify-content-between"
                        >
                          <Button variant="" className={classes["btn-cat"]}>
                            {showCat}
                          </Button>
                          <div>
                            <FaRegHeart />
                         
                            <Link to={`/newsItem/${list.id}`}>   <FaLink /></Link>
                            {/* <Link to="/newsItem">News Item</Link> */}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                }
              })}
            </div>
          }
        </div>

        <Button
          className=" "
          variant=""
          style={{ backgroundColor: " #FF7C16", color: "white" }}
        >
          View All News
        </Button>
      </>
    </>
  );
}

export default News;
