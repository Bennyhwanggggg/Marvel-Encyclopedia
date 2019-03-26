import React from 'react';
import { Link } from 'react-router-dom';

export const renderItems = (items, itemType) => {
    return items.map(item => {
        const uriArray = item.resourceURI.split('/');
        const id = uriArray[uriArray.length-1];
        if (itemType === 'comics') {
            return (
                <div className="item" key={id}>
                    <Link to={`/comics/${id}`}>{item.name}</Link>
                </div>
            )
        }
        return (
            <div className="item" key={id}>
                <Link to={`/comics/${id}/${itemType}`}>{item.name}</Link>
            </div>
        )
    })
}

const renderSubList = (item, header, itemType) => {
    if (item.available) {
        return (
            <div className="item">
                <div className="header">
                    {header}
                </div>
                {item.available}
                <div className="header">
                    Some of these are:
                </div>
                {renderItems(item.items, itemType)}
            </div>
        )
    } else {
        return (
            <div className="item">
                <div className="header">
                    {header}
                </div>
                {item.available}
            </div>
        )
    }
}

const renderCategories = (item) => {

    if (item) {
        const toRenderComic = item.comics ? renderSubList(item.comics, 'Number of comics', 'comics') : ''
        const toRenderCharacterItem = item.characters ? renderSubList(item.characters, 'Number of characters', 'characters') : ''
        const toRenderCreatorItem = item.creators ? renderSubList(item.creators, 'Number of creators', 'creators') : ''
        const toRenderEventItem = item.events ? renderSubList(item.events, 'Number of events', 'events') : ''
        const toRenderStoryItem = item.stories ? renderSubList(item.stories, 'Number of stories', 'stories') : ''
        return (
            <div className="ui list">
                {toRenderComic}
                {toRenderCharacterItem}
                {toRenderCreatorItem}
                {toRenderEventItem}
                {toRenderStoryItem}
            </div>
        )
    } else {
        return (
            <div className="ui loader">Loading</div>
        )
    }
}

const renderThumbnail = (item) => {
    return (
        <div className="image">
            <img src={`${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`} alt="thumbnail" />
        </div>
    )
}

export const renderList = (items, itemType) => {
    if (items && items.results){
        if (!items.results.length){
            return (
                <div>0 results</div>
            )
        }
        return items.results.map(item => {
            const name = itemType === 'creators' ? item.fullName : item.title;
            const thumbnail = item.thumbnail ? renderThumbnail(item) : ''
            const toRenderCategories = itemType === 'comicList' ? '': renderCategories(item);
            return (
                <div className="item title" key={item.id}>
                    <i className="dropdown icon"></i>
                    {thumbnail}
                    <div className="content">
                        <div className="header">
                            <Link to={`/comics/${item.id}`}>{name}</Link>
                        </div>
                        <div className="description">
                            {item.description}
                        </div>
                        <div className="ui vertical segment">
                            {toRenderCategories}
                        </div>
                    </div>
                </div>
            )
        })
    } else {
        return (
            <div className="ui loader">Loading</div>
        )
    }
}