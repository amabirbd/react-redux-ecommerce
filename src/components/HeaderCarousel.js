import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel showThumbs={false} showStatus={false} autoPlay>
    <a href="#">
      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        />
        <p className="legend">Headphones</p>
      </div>
    </a>

    <a href="#">
      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
        />
        <p className="legend">Footwear</p>
      </div>
    </a>
  </Carousel>
);
