import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';


const CarouselSlider = () => {
  const listImg = [
    {
      url: 'https://i.ytimg.com/vi/EhgZnLhoFnw/maxresdefault.jpg',
      kinopoiskId: 5047464,
    },
    {
      url: 'https://img.youtube.com/vi/fVz4yUWp7uo/maxresdefault.jpg',
      kinopoiskId: 4860047,
    },
    {
      url: 'https://static.okko.tv/images/v3/22320943?scale=1&quality=80',
      kinopoiskId: 5129233,
    },
    {
      url: 'https://zetimage.net/uploads/posts/2024-01/1704479569_k1.jpg',
      kinopoiskId: 602675,
    },
    {
      url: 'https://i.ytimg.com/vi/Q47dREZI5tg/maxresdefault.jpg',
      kinopoiskId: 1166627,
    },
    {
      url: 'https://i.ytimg.com/vi/RakDC0Waz2s/maxresdefault.jpg',
      kinopoiskId: 5104536,
    },
    {
      url: 'https://i.ytimg.com/vi/Rc2frh1AOa4/maxresdefault.jpg',
      kinopoiskId: 2000128,
    },
  ];
  // console.log(list.slice(1, 8));
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
        {listImg.map((item) => (
          <SwiperSlide key={item.kinopoiskId}>
            <img className='img' id={String(item.kinopoiskId)} src={item.url} alt="img" />
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
