import React from "react";
import webBannerImg from "../../assets/banner_coffee_image_web.png";
import mobileBannerImg from "../../assets/banner_coffee_image_mobile.png";

function Banner() {
  return (
    <>
      <div
        id="banner_sec"
        className="container-fluid w-100 bg-coffee max-h-screen relative overflow-hidden"
      >
        <picture className="realtive block w-full">
          <source srcSet={mobileBannerImg} media="(max-width: 768px)" />
          <source srcSet={webBannerImg} media="(min-width: 769px)" />
          <img
            className="w-full object-cover object-center"
            src={webBannerImg}
            alt="Coffee Friend Banner"
          />
        </picture>
        <div className="container-fluid lg:px-10 md:px-8 sm:px-8 px-5 py-3 absolute sm:bottom-[20%] bottom-[10%] left-0 right-0 ">
          <div className="container flex flex-col gap-3 justify-center align-start w-full mx-auto">
            <h2 className="text-base color-light">
              We’ve got your morning covered with
            </h2>
            <h1 className="text-9xl secondary-font py-3 color-light">Coffee</h1>
            <p className="text-base color-light max-w-xl">
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </p>
            <div className="mt-3">
              <a
                href="#orderNow"
                className="btn inline rounded-full px-4 py-2 bg-secondary bg-black-onhover w-auto color-black color-light-onhover"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
