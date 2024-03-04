import { useParams } from 'react-router-dom';

import style from './watch.module.css';
import ReactPlayer from 'react-player/youtube';
import { useGetFilmsQuery } from '../../features/api/api';
import WatchContents from '../../components/witchContents/watchContents';
import NewFilmsSlider from '../../components/carouselSlider/newFilmsSlider';

const Watch = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetFilmsQuery(`/${id}`);

  return (
    <>
      {!isLoading ? (
        <>
          <section className={style.watch}>
            <div className={style.container}>
              <div className={style.wrap}>
                <WatchContents data={data} />
              </div>
            </div>
          </section>{' '}
        </>
      ) : (
        <h2 className={style.loading}>Loading...</h2>
      )}
    </>
  );
};
export default Watch;
