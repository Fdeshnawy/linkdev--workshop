import { useEffect, useState } from "react";
import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./CarouselSlide.module.scss";
import Button from "react-bootstrap/Button";
import demo from "../../assests/Play-button.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import girl from "../../assests/person-Decore.png";
import carouselsecond from "../../assests/ImageTwoDecore.png";
import carouselThree from "../../assests/ImageThreeDecore.png";
import decoreOne from "../../assests/Top-Nav-Decore.png";
import decoreSecond from "../../assests/Decore.png";
import decoreThree from "../../assests/thirdDecore.png";
import Spinner from 'react-bootstrap/Spinner';

//Fetch data from api 
//Adding animations
function CasouselSlide() {
  const [user, setUser] = useState([]);
  const [isLoadingBanner, setIsLoadingBanner] = useState(false);

  const fetchData = () => {
    setIsLoadingBanner(true);
    return fetch("https://api.npoint.io/fee177346e7875554413")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.slides);
        data.slides[1].imgUrl = girl;
        data.slides[2].imgUrl = carouselsecond;
        data.slides[0].imgUrl = carouselThree;

        data.slides[1].itemUrl = decoreOne;
        data.slides[2].itemUrl = decoreSecond;
        data.slides[0].itemUrl = decoreThree;
        setIsLoadingBanner(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.carouselHead}>
      <Carousel
        controls={false}
        style={{ overflow: "visible" }}
        className={classes["carousel-indicators"]}
      >
        { isLoadingBanner ? 
        <>
         <Spinner animation="border" />;
        <p>Loading banner</p>
        </> : 
        user.map((review) => (
          <Carousel.Item key={review.id}>
            <img className={classes.decore} src={review.itemUrl} alt="decore" />
            <Row>
              <Col>
                <p
                  className={classes.category}
                  style={{ color: "#" + review.colorCode }}
                >
                  {review.category}
                </p>
                <h1 className={classes.title}>{review.title}</h1>
                <p className={classes.brief}>{review.brief}</p>

                <div
                  className="d-flex align-items-center"
                  style={{ marginTop: "-50px" }}
                >
                  <Button
                    className="d-flex "
                    variant=""
                    style={{ backgroundColor: " #FF7C16", color: "white" }}
                    href="https://www.google.com/"
                  >
                    Find out more
                  </Button>
                  <img width={150} src={demo} alt="demo" />
                  <a className={classes.txt} href="{videoUrl}" style={{color:'#000',textDecoration:'none' }}>Play demo</a>
                </div>
              </Col>
              <Col>
                <img
                  className={classes["perspon-decore"]}
                  src={review.imgUrl}
                  alt="img"
                />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CasouselSlide;
