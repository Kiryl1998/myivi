import ReactPlayer from 'react-player';

import style from './watchContents.module.css';
import { Ifilm } from '../../features/api/type';

interface PropsWatchContents {
  data: Ifilm;
}

const WatchContents = ({ data }: PropsWatchContents) => {
  console.log(data);
  return (
    <>
      <h2 className={style.title}>{`${data.seasonsInfo?'Фильм':'Сериал'} - ${data.genres[0]}`}</h2>
      <div className={style.boxPlayerContents}>
        <div className={style.player}>
          <ReactPlayer
            controls={true}
            playing={true}
            pip={true}
            stopOnUnmount={true}
            url={data.videos.trailers[0].url}
          />
        </div>

        <div className={style.contents}>
          <h2 className={style.name}>{data.name}</h2>
          <span className={style.subText}>{`${data.year} ${
            data.seasonsInfo
              ? `${String(data.seasonsInfo[0].number)} Сезон`
              : ''
          }`}</span>
          <span className={style.subText}>{`${
            data.countries[0].name
          }, ${data.genres.map((item) => item.name)}`}</span>
        </div>
      </div>
    </>
  );
};

export default WatchContents;
