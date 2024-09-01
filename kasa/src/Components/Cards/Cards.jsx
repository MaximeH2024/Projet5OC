import React from 'react';
import './Cards.scss';

function Card({ title, cover }) {
    return (
        <div className="card">
            <img src={cover} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
        </div>
    );
}

export default Card;