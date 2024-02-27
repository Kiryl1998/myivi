import CarouselSlider from '../components/carouselSlider/carouselSlider';
import NewFilmsSlider from '../components/carouselSlider/newFilmsSlider';
import style from './home.module.css';
const Home = () => {
  return (
    <>
      <CarouselSlider />
      <div className={style.container}>
        <NewFilmsSlider />
      </div>
    </>
  );
};
export default Home;
