import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import './stylesNew.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBook } from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faEyeSlash,
  faShareFromSquare,
  faStar,
  faEye,
} from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie, MovieResponse } from '../../features/api/type';

interface PropsNewFilmsSlider {
  title: string;
  sliceStart: number;
  sliceEnd: number;
  data: MovieResponse;
}

const NewFilmsSlider = ({
  title,
  sliceStart,
  sliceEnd,
  data,
}: PropsNewFilmsSlider) => {
  const [bookMark, setBookMark] = useState(false);

  const [Eye, setEye] = useState(false);

  const navigation = useNavigate();

  return (
    <>
      <div className="wrap">
        <h2 className="title">{title}</h2>

        <Swiper
          slidesPerView={7}
          slidesPerGroup={7}
          parallax={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={24}
          speed={700}
          freeMode={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.docs.slice(sliceStart, sliceEnd).map((item: Movie) => (
            <SwiperSlide
              onClick={() => {
                navigation('/watch/' + String(item.id));
              }}
              className="newSlider"
              key={item.id}
            >
              <div className="wrapImg">
                <div className="boxHover">
                  <div className="boxIcon">
                    <FontAwesomeIcon
                      onClick={() => {
                        setBookMark(!bookMark);
                      }}
                      icon={bookMark ? solidBook : faBookmark}
                      className={['icon'].join(' ')}
                    />{' '}
                    <FontAwesomeIcon
                      icon={faShareFromSquare}
                      className="icon"
                    />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon
                      onClick={() => setEye(!Eye)}
                      icon={Eye ? faEye : faEyeSlash}
                      className={['icon', Eye ? 'active' : ''].join(' ')}
                    />
                  </div>
                  <span className={'textCard'}>
                    {`${item.year}, ${item.countries},
                 ${item.genres}`}
                  </span>
                </div>

                <img
                  className="imgNew"
                  id={String(item.id)}
                  src={item.poster.url}
                  alt="img"
                />
              </div>
              {
                <span className="subText">
                  {item.name.length < 14
                    ? item.name.slice(0, 17)
                    : `${item.name.slice(0, 14)}...`}
                </span>
              }
            </SwiperSlide>
          ))}
          <div
            className={[
              'swiper-button-next',
              'buttonNext',
              'newButtonNext',
            ].join(' ')}
          ></div>
          <div
            className={[
              'swiper-button-prev',
              'buttonPrev',
              'newButtonPrev',
            ].join(' ')}
          ></div>
        </Swiper>
      </div>
    </>
  );
};
export default NewFilmsSlider;
