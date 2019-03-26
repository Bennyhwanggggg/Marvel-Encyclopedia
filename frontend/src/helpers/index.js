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

const renderComicItem = (item) => {
    return (
        <div className="item">
            <div className="header">
                Number of comics
                    </div>
            {item.comics.available}
            <div>
                Some of these are:
                        {renderItems(item.comics.items, 'comics')}
            </div>
        </div>
    )
}

const renderCharacterItem = (item) => {
    return (
        <div className="item">
            <div className="header">
                Number of characters
                        </div>
            {item.characters.available}
            <div>
                Some of these are:
                        {renderItems(item.characters.items, 'characters')}
            </div>
        </div>
    )
}

const renderCreatorItem = (item) => {
    return (
        <div className="item">
            <div className="header">
                Number of creators
                        </div>
            {item.creators.available}
            <div>
                Some of these are:
                        {renderItems(item.creators.items, 'creators')}
            </div>
        </div>
    )
}

const renderEventItem = (item) => {
    return (
        <div className="item">
            <div className="header">
                Number of events
                    </div>
            {item.events.available}
            <div>
                Some of these are:
                        {renderItems(item.events.items, 'events')}
            </div>
        </div>
    )
}

const renderStoryItem = (item) => {
    console.log(item)
    return (
        <div className="item">
            <div className="header">
                Number of stories
                        </div>
            {item.stories.available}
            <div>
                Some of these are:
                            {renderItems(item.stories.items, 'stories')}
            </div>
        </div>
    )
}

const renderCategories = (item) => {

    if (item) {
        const toRenderComic = item.comics ? renderComicItem(item) : ''
        const toRenderCharacterItem = item.characters ? renderCharacterItem(item) : ''
        const toRenderCreatorItem = item.creators ? renderCreatorItem(item) : ''
        const toRenderEventItem = item.events ? renderEventItem(item) : ''
        const toRenderStoryItem = item.stories ? renderStoryItem(item) : ''
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
            <div>Loading...</div>
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
    if (items){
        if (!items.results){
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
            <div>
                Loading...
            </div>
        )
    }
}