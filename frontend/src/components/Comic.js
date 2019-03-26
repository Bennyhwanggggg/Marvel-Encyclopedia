import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getComic } from '../actions';

class Comic extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getComic(id);
    }

    showPrices = (prices) => {
        return prices.map(price => {
            return (
                <div className="item" key={price.type}>
                    <div className="header">
                        {price.type}
                    </div>
                    {price.price}
                </div>
            );
        });
    }

    renderItems = (comic) => {
        if (!_.isEmpty(comic.prices)) {
            return (
                <div className="ui list">
                    <div className="item" key={`${comic.id}-book-format`}>
                        <div className="header">
                            Book format
                        </div>
                        {comic.format}
                    </div>
                    {this.showPrices(comic.prices)}
                    <div className="item" key={`${comic.id}-creator`}>
                        <div className="header">
                            Creators
                        </div>
                        <Link to={`/comics/${comic.id}/creators`}>{comic.creators.available}</Link>
                    </div>
                    <div className="item" key={`${comic.id}-characters`}>
                        <div className="header">
                            Characters
                        </div>
                        <Link to={`/comics/${comic.id}/characters`}>{comic.characters.available}</Link>
                    </div>
                    <div className="item">
                        <div className="header" key={`${comic.id}-stories`}>
                            Stories
                        </div>
                        <Link to={`/comics/${comic.id}/stories`}>{comic.stories.available}</Link>
                    </div>
                    <div className="item">
                        <div className="header" key={`${comic.id}-events`}>
                            Events
                        </div>
                        <Link to={`/comics/${comic.id}/events`}>{comic.events.available}</Link>
                    </div>
                </div>
            )
        } else {
            return(
                <div>Loading...</div>
            )
        }
    }

    renderList() {
        if (!_.isEmpty(this.props.comic)){
            return this.props.comic.results.map(comic => {
                return (
                    <div className="ui segment" key={comic.id}>
                        <div className="image container">
                            <img 
                                src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} 
                                className="ui centered large rounded image"
                                alt="thumbnail"/>
                        </div>
                        <div className="content">
                            <div className="ui header">
                                {comic.title}
                            </div>
                            <div className="ui description">
                                {comic.description}
                            </div>
                            <div className="ui vertical segment">
                                {this.renderItems(comic)}
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

    render() {
        return (
            <div>
                <div className="ui container">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comic: state.comics
    }
};

export default connect(
    mapStateToProps,
    { getComic }
)(Comic);