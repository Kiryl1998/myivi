import CarouselSlider from '../components/carouselSlider/carouselSlider';
import NewFilmsSlider from '../components/carouselSlider/newFilmsSlider';
import style from './home.module.css';
const Home = () => {
  return (
    <>
      <CarouselSlider />
      <div className={style.container}>
        <NewFilmsSlider title={'Фильмы новинки'} sliceStart={0} sliceEnd={20} />
        <NewFilmsSlider title={'Популярные'} sliceStart={20} sliceEnd={47} />
      </div>
    </>
  );
};
export default Home;
