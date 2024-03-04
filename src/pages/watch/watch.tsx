import { useParams } from 'react-router-dom';

import style from './watch.module.css';
import ReactPlayer from 'react-player/youtube';
import { useGetFilmsQuery } from '../../features/api/api';
import WatchContents from '../../components/witchContents/watchContents';


const Watch = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetFilmsQuery(`/${id}`);
  const list = useGetFilmsQuery('?page=1&limit=50&year=2023-2023');
  console.log(list);
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
          </section>
        </>
      ) : (
        <h2 className={style.loading}>Loading...</h2>
      )}
    </>
  );
};
export default Watch;
