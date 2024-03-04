import CarouselSlider from '../../components/carouselSlider/carouselSlider';
import NewFilmsSlider from '../../components/carouselSlider/newFilmsSlider';
import { useGetFilmsQuery } from '../../features/api/api';
import style from './home.module.css';

const Home = () => {
  const { data, isLoading, error } = useGetFilmsQuery(
    '?page=1&limit=50&year=2023-2023'
  );
  console.log(data)
  return (
    <>
      {!isLoading && data != undefined ? (
        <>
          <CarouselSlider data={data} />
          <div className={style.container}>
            <NewFilmsSlider
              title={'Фильмы новинки'}
              sliceStart={0}
              sliceEnd={20}
            />
            <NewFilmsSlider
              title={'Популярные'}
              sliceStart={20}
              sliceEnd={47}
            />
          </div>
        </>
      ) : <h2 className={style.loading}>Loading...</h2> ? (
        error
      ) : (
        console.log(error)
      )}
    </>
  );
};
export default Home;
