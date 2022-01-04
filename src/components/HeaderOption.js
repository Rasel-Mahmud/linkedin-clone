import React from 'react';
import './HeaderOption.scss';

export default function HeaderOption({ Avater, image, title, Icon }) {
  return (
    <div className="headerOption">
      { Icon && <Icon className="headerOption__icon" />}
      {Avater && (
        <Avater className="headerOption__icon" src={image} />
      )}
      <h3 className="headerOption__title">{ title }</h3>
    </div>
  )
}
