import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Certificate = ({ heading, message, img, imageSize }) => {
  const [dynamicSize, setDynamicSize] = useState(imageSize);

  useEffect(() => {
    // Function to update image size based on window width
    const updateImageSize = () => {
      if (window.innerWidth <= 768) {
        // Mobile size
        setDynamicSize({
          width: "300",
          height: "232", // Adjust aspect ratio for mobile
        });
      } else {
        // Desktop size
        setDynamicSize(imageSize);
      }
    };

    // Initial check and set listener for resizing
    updateImageSize();
    window.addEventListener("resize", updateImageSize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", updateImageSize);
    };
  }, [imageSize]);

  return (
    <Jumbotron
      id="certifications"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead" dangerouslySetInnerHTML={{ __html: message }} />
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt={`Slide ${index + 1}`}
                    width={dynamicSize.width}
                    height={dynamicSize.height}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>{value.paragraph}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Certificate;
