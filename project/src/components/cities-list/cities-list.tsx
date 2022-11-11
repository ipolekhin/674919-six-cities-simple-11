import React, {MouseEvent} from 'react';
import {Cities} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action';

const CitiesList = (): JSX.Element => {
  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleLinkChangeCity = (evt: MouseEvent<HTMLAnchorElement>, city: string) => {
    evt.preventDefault();
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        Cities.map((city) => (
          <li className="locations__item" key={city}>
            <a className={`locations__item-link tabs__item${(city === activeCity) ? ' tabs__item--active' : ''}`} href="#" onClick={(evt) => {handleLinkChangeCity(evt, city);}}>
              <span>{city}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
};

export default CitiesList;
