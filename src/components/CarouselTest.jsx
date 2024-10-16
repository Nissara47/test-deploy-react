import React from "react";
import { Carousel } from "@material-tailwind/react";

const CarouselTest = () => {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-2xl font-bold">Sunset Over the Mountains</h2>
          <p className="text-lg">Experience the beauty of nature</p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-2xl font-bold">Sunset Over the Mountains</h2>
          <p className="text-lg">Experience the beauty of nature</p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-2xl font-bold">Sunset Over the Mountains</h2>
          <p className="text-lg">Experience the beauty of nature</p>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselTest;
