import ReactPlayer from 'react-player';

import style from './watchContents.module.css';
import { Ifilm } from '../../features/api/type';
import {
  faBookmark,
  faShareFromSquare,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swiper from 'swiper';

interface PropsWatchContents {
  data: Ifilm;
}

const WatchContents = ({ data }: PropsWatchContents) => {
  // const data = {
  //   id: 5304403,
  //   externalId: {
  //     imdb: 'tt28429213',
  //     tmdb: 234763,
  //   },
  //   name: 'Слово пацана. Кровь на асфальте',
  //   alternativeName: null,
  //   names: [
  //     {
  //       name: 'Слово пацана',
  //       language: 'RU',
  //       type: 'Russian title on kinopoisk',
  //     },
  //     {
  //       name: 'Короли асфальта',
  //       language: null,
  //       type: null,
  //     },
  //     {
  //       name: 'Слово пацана. Кровь на асфальте',
  //       language: null,
  //       type: null,
  //     },
  //     {
  //       name: 'Дечачка реч. Крв на асфалту',
  //       language: 'RS',
  //       type: null,
  //     },
  //     {
  //       name: "Boy's word. Blood on the asphalt",
  //       language: 'US',
  //       type: null,
  //     },
  //   ],
  //   type: 'tv-series',
  //   typeNumber: 2,
  //   year: 2023,
  //   description:
  //     'Казань, начало 1989 года. Пока родители борются за выживание, подростки сбиваются в уличные банды и бьются за асфальт. Буквально, чтобы контролировать всё, что стоит на «их» земле или передвигается по ней. Среди всеобщей нищеты — чёткие правила жизни, поддержка и слово пацана, которое сильнее клятвы.\n14-летний Андрей из интеллигентной семьи, он учится в музыкальной школе и живёт с мамой и маленькой сестрёнкой. Однажды парня назначают подтянуть по английскому сверстника Марата — гопника из местной группировки. Пообщавшись с нормальным пацаном и решив, что ему надоело быть чушпаном, Андрей вступает в банду.',
  //   shortDescription: null,
  //   slogan: 'Пацаны не извиняются',
  //   status: 'completed',
  //   rating: {
  //     kp: 8.355,
  //     imdb: 7.6,
  //     filmCritics: 0,
  //     russianFilmCritics: 100,
  //     await: null,
  //   },
  //   votes: {
  //     kp: 782210,
  //     imdb: 4211,
  //     filmCritics: 0,
  //     russianFilmCritics: 10,
  //     await: 10289,
  //   },
  //   movieLength: null,
  //   ratingMpaa: null,
  //   ageRating: 18,
  //   poster: {
  //     url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/58239d8d-44d3-475e-ab3f-878679c64290/orig',
  //     previewUrl:
  //       'https://image.openmoviedb.com/kinopoisk-images/10893610/58239d8d-44d3-475e-ab3f-878679c64290/x1000',
  //   },
  //   backdrop: {
  //     url: 'https://image.openmoviedb.com/tmdb-images/original/AqxPqTbD77ioyBDdk39MEQq6vXL.jpg',
  //     previewUrl:
  //       'https://image.openmoviedb.com/tmdb-images/w500/AqxPqTbD77ioyBDdk39MEQq6vXL.jpg',
  //   },
  //   genres: [
  //     {
  //       name: 'драма',
  //     },
  //     {
  //       name: 'криминал',
  //     },
  //   ],
  //   countries: [
  //     {
  //       name: 'Россия',
  //     },
  //   ],
  //   persons: [
  //     {
  //       id: 6607111,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_6607111.jpg',
  //       name: 'Леон Кемстач',
  //       enName: null,
  //       description: 'Андрей',
  //       profession: 'актеры',
  //       enProfession: 'actor',
  //     },
  //     {
  //       id: 6541702,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_6541702.jpg',
  //       name: 'Рузиль Минекаев',
  //       enName: null,
  //       description: 'Марат',
  //       profession: 'актеры',
  //       enProfession: 'actor',
  //     },
  //     {
  //       id: 238525,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_238525.jpg',
  //       name: 'Иван Янковский',
  //       enName: null,
  //       description: 'Вова Суворов / Адидас',
  //       profession: 'актеры',
  //       enProfession: 'actor',
  //     },
  //     {
  //       id: 5821258,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_5821258.jpg',
  //       name: 'Анастасия Красовская',
  //       enName: null,
  //       description: 'Ирина',
  //       profession: 'актеры',
  //       enProfession: 'actor',
  //     },
  //     {
  //       id: 1714177,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_1714177.jpg',
  //       name: 'Юлия Александрова',
  //       enName: null,
  //       description: 'Светлана Михайловна',
  //       profession: 'актеры',
  //       enProfession: 'actor',
  //     },
  //     {
  //       id: 7089008,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_7089008.jpg',
  //       name: 'Слава Копейкин',
  //       enName: null,
  //       description: 'Валера Туркин / Турбо',
  //       profession: 'актеры',
  //       enProfession: 'actor',
  //     },
  //     {
  //       id: 6828191,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_6828191.jpg',
  //       name: 'Лев Зулькарнаев',
  //       enName: null,
  //       description: null,
  //       profession: 'актеры',
  //       enProfession: 'actor',
  //     },
  //     {
  //       id: 4511829,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_4511829.jpg',
  //       name: 'Никита Кологривый',
  //       enName: null,
  //       description: 'Кащей',
  //       profession: 'актеры',
  //       enProfession: 'actor',
  //     },
  //     {
  //       id: 1193331,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_1193331.jpg',
  //       name: 'Сергей Бурунов',
  //       enName: null,
  //       description: 'Кирилл Суворов',
  //       profession: 'актеры',
  //       enProfession: 'actor',
  //     },
  //     {
  //       id: 1917134,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_1917134.jpg',
  //       name: 'Антон Васильев',
  //       enName: null,
  //       description: 'Ильдар Юнусович',
  //       profession: 'актеры',
  //       enProfession: 'actor',
  //     },
  //     {
  //       id: 3114578,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_3114578.jpg',
  //       name: 'Денис Быков',
  //       enName: null,
  //       description: null,
  //       profession: 'художники',
  //       enProfession: 'designer',
  //     },
  //     {
  //       id: 2356169,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_2356169.jpg',
  //       name: 'Денис Бауэр',
  //       enName: null,
  //       description: null,
  //       profession: 'художники',
  //       enProfession: 'designer',
  //     },
  //     {
  //       id: 2002965,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_2002965.jpg',
  //       name: 'Григорий Пушкин',
  //       enName: null,
  //       description: null,
  //       profession: 'художники',
  //       enProfession: 'designer',
  //     },
  //     {
  //       id: 5844712,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_5844712.jpg',
  //       name: 'Дарья Фомина',
  //       enName: null,
  //       description: null,
  //       profession: 'художники',
  //       enProfession: 'designer',
  //     },
  //     {
  //       id: 2391885,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_2391885.jpg',
  //       name: 'Жора Крыжовников',
  //       enName: null,
  //       description: null,
  //       profession: 'режиссеры',
  //       enProfession: 'director',
  //     },
  //     {
  //       id: 5856590,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_5856590.jpg',
  //       name: 'Егор Тарасенко',
  //       enName: null,
  //       description: null,
  //       profession: 'монтажеры',
  //       enProfession: 'editor',
  //     },
  //     {
  //       id: 2310836,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_2310836.jpg',
  //       name: 'Александр Верхоляк',
  //       enName: null,
  //       description: null,
  //       profession: 'монтажеры',
  //       enProfession: 'editor',
  //     },
  //     {
  //       id: 2711501,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_2711501.jpg',
  //       name: 'Александр Иванов',
  //       enName: null,
  //       description: null,
  //       profession: 'монтажеры',
  //       enProfession: 'editor',
  //     },
  //     {
  //       id: 2507110,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_2507110.jpg',
  //       name: 'Юрий Коробейников',
  //       enName: null,
  //       description: null,
  //       profession: 'операторы',
  //       enProfession: 'operator',
  //     },
  //     {
  //       id: 231517,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_231517.jpg',
  //       name: 'Фёдор Бондарчук',
  //       enName: null,
  //       description: null,
  //       profession: 'продюсеры',
  //       enProfession: 'producer',
  //     },
  //     {
  //       id: 1862119,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_1862119.jpg',
  //       name: 'Дмитрий Табарчук',
  //       enName: null,
  //       description: null,
  //       profession: 'продюсеры',
  //       enProfession: 'producer',
  //     },
  //     {
  //       id: 3489754,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_3489754.jpg',
  //       name: 'Максим Рыбаков',
  //       enName: null,
  //       description: null,
  //       profession: 'продюсеры',
  //       enProfession: 'producer',
  //     },
  //     {
  //       id: 6878880,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_6878880.jpg',
  //       name: 'Александр Косарим',
  //       enName: null,
  //       description: null,
  //       profession: 'продюсеры',
  //       enProfession: 'producer',
  //     },
  //     {
  //       id: 2391885,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_2391885.jpg',
  //       name: 'Жора Крыжовников',
  //       enName: null,
  //       description: null,
  //       profession: 'редакторы',
  //       enProfession: 'writer',
  //     },
  //     {
  //       id: 2229568,
  //       photo:
  //         'https://st.kp.yandex.net/images/actor_iphone/iphone360_2229568.jpg',
  //       name: 'Андрей Золотарев',
  //       enName: null,
  //       description: null,
  //       profession: 'редакторы',
  //       enProfession: 'writer',
  //     },
  //   ],
  //   budget: {},
  //   fees: {
  //     world: {},
  //     russia: {},
  //     usa: {},
  //   },
  //   premiere: {
  //     world: '2023-11-09T00:00:00.000Z',
  //     digital: '2023-11-09T00:00:00.000Z',
  //   },
  //   ticketsOnSale: false,
  //   sequelsAndPrequels: [],
  //   watchability: {
  //     items: [
  //       {
  //         name: 'START',
  //         logo: {
  //           url: 'https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig',
  //         },
  //         url: 'https://start.ru/watch/slovo-pacana?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=slovo-pacana',
  //       },
  //       {
  //         name: 'Wink',
  //         logo: {
  //           url: 'https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig',
  //         },
  //         url: 'https://wink.ru/media_items/149611047?utm_source=yandex&utm_medium=koldunschick&utm_content=name',
  //       },
  //     ],
  //   },
  //   releaseYears: [
  //     {
  //       start: 2023,
  //       end: 2023,
  //     },
  //   ],
  //   top10: null,
  //   top250: 88,
  //   facts: [
  //     {
  //       value:
  //         'Несмотря на схожесть названия, сериал не является экранизацией книги &#171;Слово пацана. Криминальный Татарстан 1970&#8211;2010-х&#187;. Однако её автор Роберт Гараев принимал участие в проекте как консультант.',
  //       type: 'FACT',
  //       spoiler: false,
  //     },
  //     {
  //       value:
  //         'После выхода третьего эпизода режиссёр <a href="/name/2391885/" class="all">Жора Крыжовников</a> решил переснять некоторые сцены восьмого, чтобы слегка изменить финал.',
  //       type: 'FACT',
  //       spoiler: false,
  //     },
  //   ],
  //   spokenLanguages: [],
  //   seasonsInfo: [
  //     {
  //       number: 1,
  //       episodesCount: 8,
  //     },
  //   ],
  //   collections: [],
  //   productionCompanies: [],
  //   similarMovies: [],
  //   createdAt: '2023-05-06T09:11:37.214Z',
  //   updatedAt: '2024-03-04T01:00:19.077Z',
  //   deletedAt: null,
  //   isSeries: true,
  //   seriesLength: 53,
  //   totalSeriesLength: null,
  //   lists: ['series-top250', 'popular-series'],
  //   logo: {
  //     url: 'https://imagetmdb.com/t/p/original/8ir7V7krUm3wDOAtoR2V3Yg9yCe.png',
  //   },
  //   networks: {
  //     items: [
  //       {
  //         name: 'Wink',
  //       },
  //     ],
  //   },
  //   enName: "Boy's word. Blood on the asphalt",
  //   videos: {
  //     trailers: [
  //       {
  //         url: 'https://www.youtube.com/embed/lEBAnyWQsOo',
  //         name: 'Слово пацана || Тизер',
  //         site: 'youtube',
  //         type: 'TRAILER',
  //       },
  //       {
  //         url: 'https://www.youtube.com/embed/lEBAnyWQsOo',
  //         name: 'Слово пацана || Тизер',
  //         site: 'youtube',
  //         type: 'TRAILER',
  //       },
  //     ],
  //   },
  // };
  console.log(data);
  return (
    <>
      <h2 className={style.title}>{`${
        data.seasonsInfo ? 'Фильм' : 'Сериал'
      } - ${data.genres[0].name}`}</h2>
      <div className={style.boxPlayerContents}>
        <div className={style.player}>
          <ReactPlayer
            style={{ position: 'sticky', top: 0 }}
            controls={true}
            playing={true}
            pip={true}
            stopOnUnmount={true}
            url={data.videos.trailers[0].url}
          />
        </div>

        <div className={style.contents}>
          <h2 className={style.name}>{data.name}</h2>
          <span className={style.subText}>{`${data.year}г. ${
            data.isSeries
              ? `${String(data.seasonsInfo[0].number)} Сезон`
              : `${data.movieLength}мин.`
          } ${data.ageRating}+`}</span>
          <span className={style.subText}>{`${
            data.countries[0].name
          },${data.genres.map((item) => ` ${item.name}`)}`}</span>
          <div className={style.wrapPersons}>
            <div className={[style.wrapPerson].join(' ')}>
              <div className={style.person}>
                {
                  <span className={style.textRating}>
                    {data.rating.kp.toFixed(1)}
                  </span>
                }
              </div>
              <span className={style.namePerson}>Рейтинг иви</span>
            </div>
            {data.persons.slice(0, 4).map((item) => (
              <>
                <div className={style.wrapPerson}>
                  <div className={style.person}>
                    <img className={style.img} src={item.photo} alt="" />
                  </div>
                  <span className={style.namePerson}>{item.name}</span>
                </div>
              </>
            ))}
          </div>
          <div className={style.linksBtns}>
            <a className={style.linkBtn} href={data.watchability.items[0].url}>
              Смотереть бессплатно
            </a>
            <FontAwesomeIcon className={style.icon} icon={faBookmark} />
            <FontAwesomeIcon className={style.icon} icon={faShareFromSquare} />
          </div>
          <div className={style.description}>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <h2 className={style.actor}>Актеры и создатели</h2>
      <div className={style.wrapActors}>
        {data.persons.slice(1, 10).map((item) => (
          <div className={style.cardActor} key={item.id}>
            <div className={style.wrapImg}>
              <img src={item.photo} alt="img" />
            </div>
            <span className={style.namePerson}>{item.name}</span>
            <span className={style.profession}>{item.enProfession}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchContents;
