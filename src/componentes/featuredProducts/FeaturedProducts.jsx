import React, { props } from "react";

function FeaturedProducts(props) {
  const sectionId = props.sectionId,
    sectionTitle = props.sectionTitle,
    sectionDescription = props.sectionDescription,
    products = props.products,
    btn_text = props.btn_text;
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
          <div className="flex md:flex-wrap md:justify-around items-stretch gap-x-3 gap-y-8 product-slider-wrapper md:overflow-hidden overflow-y-hidden overflow-x-auto pb-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card bg-orange-50 flex-grow-0 flex-shrink-0"
              >
                <div className="product-image-wrapper w-full">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="product-details border-2 border-orange-100 border-t-0 p-3 pb-1">
                  <h3 className="text-lg color-dark primary-font-bold">
                    {product.title}
                  </h3>
                  <p className="block my-2 2-full color-dark primary-font-regular">
                    {product.description}
                  </p>
                  <div className="product-price">
                    <span className="text-lg font-bold color-secondary">
                      {product.price}
                    </span>
                  </div>
                  <div className="product-button">
                    <a
                      href={product.url}
                      className="btn rounded-full sm:px-4 px-3 sm:py-2 py-1.5 text-base bg-secondary bg-coffee-onhover color-black color-light-onhover primary-font-bold block w-auto max-w-max mx-auto translate-y-[50%]"
                    >
                      {btn_text}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
