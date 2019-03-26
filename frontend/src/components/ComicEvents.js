import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { getComicEvents } from '../actions';
import { renderItems } from '../helpers';

class ComicEvents extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getComicEvents(id);
    }

    renderCategories = (event) => {
        if (!_.isEmpty(event.comics)) {
            return (
                <div className="ui list">
                    <div className="item">
                        <div className="header">
                            Comics
                        </div>
                        {event.comics.available}
                        <div>
                            Some of these are:
                            {renderItems(event.comics.items, 'comics')}
                        </div>
                    </div>
                    <div className="item">
                        <div className="header">
                            Creators
                        </div>
                            {event.creators.available}
                        <div>
                            Some of these are:
                            {renderItems(event.creators.items, 'creators')}
                        </div>
                    </div>
                    <div className="item">
                        <div className="header">
                            Stories
                        </div>
                        {event.stories.available}
                        <div>
                            Some of these are:
                            {renderItems(event.stories.items, 'stories')}
                        </div>
                    </div>
                    <div className="item">
                        <div className="header">
                            Characters
                        </div>
                        {event.stories.available}
                        <div>
                            Some of these are:
                            {renderItems(event.characters.items, 'characters')}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }

    renderList = () => {
        if (!_.isEmpty(this.props.events)){
            if (!this.props.events.results.length){
                return (
                    <div>This comic has no events</div>
                )
            }
            return this.props.events.results.map(event => {
                return (
                    <div className="item title" key={event.id}>
                        <i className="dropdown icon"></i>
                        <div className="image">
                            <img src={`${event.thumbnail.path}/portrait_medium.${event.thumbnail.extension}`} alt="thumbnail" />
                        </div>
                        <div className="content">
                            <div className="header">
                                {event.title}
                            </div>
                            <div className="description">
                                {event.description}
                            </div>
                            <div className="ui vertical segment">
                                {this.renderCategories(event)}
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
                <div className="ui divided items styled fluid accordion">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.comics
    }
};

export default connect(
    mapStateToProps,
    { getComicEvents }
)(ComicEvents);