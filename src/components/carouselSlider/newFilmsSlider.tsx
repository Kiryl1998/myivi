import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useAppSelector } from '../../features/store';

import './stylesNew.css';

const NewFilmsSlider = () => {
  const list = useAppSelector(({ filmsHome }) => filmsHome.list);
  console.log(list);
  return (
    <>
      <div className="wrap">
        <h2 className="title">Фильмы новинки</h2>

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
          {list.map((item) => (
            <SwiperSlide className="newSlider" key={item.kinopoiskId}>
              <div className="wrapImg">
                <span
                  className={'textCard'}
                >{`${item.year},${item.countries[0].country},${item.genres[0].genre}`}</span>
                <img
                  className="imgNew"
                  id={String(item.kinopoiskId)}
                  src={item.posterUrl}
                  alt="img"
                />
              </div>
              {
                <span className="subText">
                  {item.nameRu.length < 10
                    ? item.nameRu.slice(0, 17)
                    : `${item.nameRu.slice(0, 15)}...`}
                </span>
              }
            </SwiperSlide>
          ))}{' '}
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
