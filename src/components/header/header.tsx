import style from './header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUser as User } from '@fortawesome/free-regular-svg-icons';
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.wrap}>
          <div className={style.LogoNav}>
            <Link to={'/'} className={style.logo}>
              Мой Иви
            </Link>
            <nav>
              <nav className={style.item}>
                <Link className={style.item__list} to={'/watch'}>
                  Мой Иви
                </Link>
                <Link className={style.item__list} to={'/'}>
                  Что Нового
                </Link>
                <Link className={style.item__list} to={'/'}>
                  Фильмы
                </Link>
                <Link className={style.item__list} to={'/'}>
                  Сериалы
                </Link>
                <Link className={style.item__list} to={'/'}>
                  Мультфильмы
                </Link>
              </nav>
            </nav>
          </div>
          <div className={style.userSearch}>
            <div className={style.search}>
              <div className={style.search__img}>
                <FontAwesomeIcon
                  className={style.img}
                  icon={faMagnifyingGlass}
                />
              </div>
              <span className={style.search__text}>Поиск</span>
            </div>
            <div className={style.user}>
              <FontAwesomeIcon className={style.userImg} icon={User} />
              <span className={style.textUser}>Войти</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
