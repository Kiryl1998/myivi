import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import {MovieResponse } from '../../features/api/type';
interface PropsCarouselSlider {
  data: MovieResponse;
}

const CarouselSlider = ({ data }: PropsCarouselSlider) => {
  const navigation = useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={1.21}
        initialSlide={1}
        parallax={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={24}
        loop={true}
        speed={700}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        modules={[Navigation]}
      >
        {data.docs.slice(1).map((item) => (
          <SwiperSlide
            onClick={() => {
              navigation('/watch/' + String(item.id));
            }}
            key={item.id}
          >
            <img
              className="img"
              id={String(item.id)}
              src={item.backdrop.url}
              alt="img"
            />
            <Link className="btnLink" to={'/'}>
              Смотреть бесплатно
            </Link>
          </SwiperSlide>
        ))}
        <div className={['swiper-button-next', 'buttonNext'].join(' ')}></div>
        <div className={['swiper-button-prev', 'buttonPrev'].join(' ')}></div>
      </Swiper>
    </>
  );
};
export default CarouselSlider;
