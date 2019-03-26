import React from 'react';
import { Link } from 'react-router-dom';

export const renderItems = (items, itemType) => {
    return items.map(item => {
        const uriArray = item.resourceURI.split('/');
        const id = uriArray[uriArray.length-1];
        return (
            <div className="item" key={id}>
                <Link to={`/${itemType}/${id}`}>{item.name}</Link>
            </div>
        )
    })
}