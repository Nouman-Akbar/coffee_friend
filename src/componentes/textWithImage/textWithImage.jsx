/* @params {String}:
  - Create a React component called 'TextWithImage' that accepts props for the
  title: 'Single line text'
  description: 'Rich text'
  btnURL: 'URL'
  btnText: 'Single line text'
  webImage: 'URL'
  webImageAlt: 'Single line text'
  mobileImage: 'URL
  mobileImageAlt: 'Single line text'
  isLeft: {true/false} (optional, default is false)
         */

import React from "react";
import props from "react-dom";

function textWithImage(props) {
  const sectionId = props.sectionId;
  // Extract the props values from the props object to use in the component's rendering
  const title = props.title;
  const description = props.description;
  const btnURL = props.btnURL;
  const btnText = props.btnText;
  const webImage = props.webImage;
  const webImageAlt = props.webImageAlt;
  const mobileImage = props.mobileImage;
  const mobileImageAlt = props.mobileImageAlt;
  const isLeft = props.isLeft;
  // Add your code here to render the component with the provided props

  return (
    <>
      <section className="container-fluid section" id={sectionId}>
        <div
          className={`inner-container container text-center py-10 lg:px-12 md:px-10 sm:px-8 px-5 flex flex-auto flex-col-reverse gap-3 justify-between md:items-center items-stretch mx-auto 
            ${isLeft ? "md:flex-row is-left" : "md:flex-row-reverse"}`}
        >
          <div className="text-left md:w-[50%] w-[100%] flex flex-col gap-3 lg:pr-9 md:pr-6">
            <h2 className="lg:text-5xl md:text-4xl text-3xl primary-font-bold color-coffee">
              {title}
            </h2>
            <p className="block my-2 2-full color-dark primary-font-regular">
              {description}
            </p>
            <div className="py-2">
              <a
                href={btnURL}
                className="btn rounded-full sm:px-4 px-3 sm:py-2 py-1.5 text-base bg-secondary bg-coffee-onhover color-black color-light-onhover primary-font-bold"
              >
                {btnText}
              </a>
            </div>
          </div>
          <div className="image-with-text image-wrapper flex-auto md:w-[50%]">
            <picture className="realtive block w-full">
              <source
                srcSet={mobileImage}
                media="(max-width: 768px)"
                alt={mobileImageAlt}
              />
              <source
                srcSet={webImage}
                media="(min-width: 769px)"
                alt={webImageAlt}
              />
              <img
                className="w-full object-cover object-center"
                src={webImage}
                alt={webImageAlt}
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}

export default textWithImage;
