import React from 'react';
import {join} from '../data';

const Join = () => {
  const { image, title, subtitle, btnText } = join;
  return (
      <section className = "bg-neutral-500 min-h-[537px]">
        <div className = "container mx-auto">
          <div className = "flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0">
            <div className = "mr-16 -mt-20 max-w-[276px] md:max-w-[442px] lg:max-w-full"
                 data-aos = "fade-right" data-aos-offset = "100" data-aos-delay = "200">
              <img src = {image} alt = "Join_img"/>
            </div>
            <div className = "max-w-[350px] lg:max-w-[492px] ml-7"
                 data-aos = "fade-left" data-aos-offset = "100" data-aos-delay = "200">
              <h2 className = "h1 md:text-[60px] md:leading-[62px] text-pink-400 mb-4 lg:mb-6">Wanna join <span className = "text-primary-200">n`</span> have fun?</h2>
              <p className = "text-body-sm md:text-body-md text-pink-400 mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]">
                {subtitle}
              </p>
              <button className = "btn btn-sm lg:btn-lg btn-secondary hover:bg-pink-400/80 lg:hover:bg-pink-400/70">{btnText}</button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Join;