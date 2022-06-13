import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination, Controller, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Controller, Lazy]);

import * as _ from 'lodash';

import { Img, Wrapper, Bullet } from 'components/slider/styled.components';

/**
 * Slider is a carousel of given elements.
 */
const Slider = ({ list = [] }) => {
  const paramsGalleryImage = {
    spaceBetween: 8,
    slidesPerView: 'auto',
    centerInsufficientSlides: true,
    observer: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <Wrapper>
      <Swiper {...paramsGalleryImage}>
        <div className={'swiper-button-prev'}></div>
        <div className={'swiper-button-next'}></div>
        {list.map((img, key) => {
          return (
            <SwiperSlide key={key}>
              <div>
                <Img
                  data-testid={`images-${key}`}
                  src={img.urls.regular}
                  alt={img.altDescription}
                  {...{
                    width: 200,
                    heigth: 'auto',
                  }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

Slider.propTypes = {
  list: PropTypes.array,
};

export default Slider;
