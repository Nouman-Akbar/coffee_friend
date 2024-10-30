/*
FeaturedProducts Component

Props:
  @param {string} sectionId - Unique ID for the section element.
  @param {string} sectionTitle - Title displayed at the top of the section.
  @param {string} sectionDescription - Description text displayed under the title.
  @param {number|string} imageMaxWidth - Maximum width for product images (number divides by 4, string is used directly).
  @param {Array} products - List of product objects to display. Each product should contain:
    @property {number|string} id - Unique identifier for each product.
    @property {string} imageSrc - URL for the product image.
    @property {string} imageAlt - Alt text for the product image.
    @property {string} title - Product title.
    @property {string} description - Product description.
    @property {string|number} price - Product price.
    @property {string} url - Link to the product page.
  @param {string} btn_text - Text displayed on the "Buy Now" button for each product.
  @param {object} bottomContent - Additional content displayed at the bottom of the section.
    @property {string} heading - Heading for the bottom content section.
    @property {string} text - Description text for the bottom content section.
    @property {string} btnText - Text for the button in the bottom content section.
    @property { string } btnLink - URL for the button in the bottom content section.
  
Sample JSON Example:
  {
    "sectionId": "string",               // Unique ID for the section element
    "sectionTitle": "string",            // Title displayed at the top of the section
    "sectionDescription": "string",      // Description text displayed under the title
    "imageMaxWidth": "number|string",    // Maximum width for product images (number divides by 4, string used directly)
    "products": [                        // Array of product objects to display
      {
        "id": "number|string",           // Unique identifier for each product
        "imageSrc": "string",            // URL for the product image
        "imageAlt": "string",            // Alt text for the product image
        "title": "string",               // Product title
        "description": "string",         // Product description
        "price": "string|number",        // Product price
        "url": "string"                  // Link to the product page
      }
    ],
    "btn_text": "string",                // Text displayed on the "Buy Now" button for each product
    "bottomContent": {                   // Additional content displayed at the bottom of the section
      "heading": "string",               // Heading for the bottom content section
      "text": "string",                  // Description text for the bottom content section
      "btnText": "string",               // Text for the button in the bottom content section
      "btnLink": "string"                // URL for the button in the bottom content section
    }
  }
*/

import React from "react";

function FeaturedProducts(props) {
  const sectionId = props.sectionId,
    sectionTitle = props.sectionTitle,
    sectionDescription = props.sectionDescription,
    imageMaxWidth = props.imageMaxWidth,
    products = props.products,
    btn_text = props.btn_text,
    bottomContent = props.bottomContent;

  return (
    <section
      id={sectionId}
      className="container-fluid section featured-products-section"
    >
      <div className="inner-container container text-center py-10 lg:px-12 md:px-10 sm:px-8 px-5 mx-auto">
        <div className="section-head pb-4">
          <h2 className="text-5xl color-coffee primary-font-bold">
            {sectionTitle}
          </h2>
          <p className="block my-2 2-full color-dark primary-font-regular">
            {sectionDescription}
          </p>
        </div>
        <div className="section-body">
          <div className="product-slider-wrapper flex md:flex-wrap md:justify-between items-stretch md:gap-x-2 gap-x-3 gap-y-8 lg:overflow-hidden overflow-y-hidden overflow-x-auto pb-5">
            {products.map((product) => (
              <div
                key={product.id}
                className={`product-card bg-orange-50 flex-grow-0 flex-shrink-0 md:min-w-1/[${
                  products.length + 1
                }] md:max-w-1/[${products.length + 1}]`}
              >
                <div className="product-image-wrapper w-full">
                  <div className="product-image-wrapper w-full">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt || title}
                      className={`object-cover object-center mx-auto w-${
                        typeof imageMaxWidth === "number"
                          ? `${imageMaxWidth / 4} mt-4`
                          : imageMaxWidth
                      }`}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="product-details border-2 border-orange-100 border-t-0 p-3 pb-1 w-full">
                  <h3 className="text-lg color-dark primary-font-bold">
                    {product.title}
                  </h3>
                  <p className="block my-2 2-full color-dark primary-font-regular">
                    {product.description}
                  </p>
                  {product.price && (
                    <div className="product-price">
                      <span className="text-lg font-bold color-secondary">
                        {product.price}
                      </span>
                    </div>
                  )}
                  {product.url && btn_text && (
                    <div className="product-button">
                      <a
                        href={product.url}
                        className="btn rounded-full sm:px-4 px-3 sm:py-2 py-1.5 text-base bg-secondary bg-coffee-onhover color-black color-light-onhover primary-font-bold block w-auto max-w-max mx-auto translate-y-[50%]"
                      >
                        {btn_text}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {bottomContent && (
          <div className="section-bottom-content pb-10 pt-5">
            <p className="block 2-full color-dark primary-font-regular">
              {bottomContent.text}
            </p>
            <h2 className="text-3xl color-coffee primary-font-bold py-3">
              {bottomContent.heading}
            </h2>
            <div className="py-2">
              <a
                href={bottomContent.btnLink}
                className="btn rounded-full sm:px-8 px-4 sm:py-3 py-1.5 text-base bg-secondary bg-coffee-onhover color-black color-light-onhover primary-font-bold"
              >
                {bottomContent.btnText}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedProducts;
