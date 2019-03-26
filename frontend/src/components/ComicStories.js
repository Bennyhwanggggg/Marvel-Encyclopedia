import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { getComicStories } from '../actions';
import { renderItems } from '../helpers';

class ComicStories extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getComicStories(id);
    }

    renderCategories = (story) => {
        if (!_.isEmpty(story.comics)) {
            return (
                <div className="ui list">
                    <div className="item">
                        <div className="header">
                            Comics
                        </div>
                        {story.comics.available}
                        <div>
                            Some of these are:
                            {renderItems(story.comics.items, 'comics')}
                        </div>
                    </div>
                    <div className="item">
                        <div className="header">
                            Creators
                        </div>
                            {story.creators.available}
                        <div>
                            Some of these are:
                            {renderItems(story.creators.items, 'creators')}
                        </div>
                    </div>
                    <div className="item">
                        <div className="header">
                            Events
                        </div>
                        {story.events.available}
                        <div>
                            Some of these are:
                            {renderItems(story.events.items, 'events')}
                        </div>
                    </div>
                    <div className="item">
                        <div className="header">
                            Characters
                        </div>
                        {story.characters.available}
                        <div>
                            Some of these are:
                            {renderItems(story.characters.items, 'characters')}
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
        if (!_.isEmpty(this.props.stories)){
            if (!this.props.stories.results.length){
                return (
                    <div>This comic has no stories</div>
                )
            }
            return this.props.stories.results.map(story => {
                return (
                    <div className="item title" key={story.id}>
                        <i className="dropdown icon"></i>
                        <div className="content">
                            <div className="header">
                                {story.title}
                            </div>
                            <div className="description">
                                {story.description}
                            </div>
                            <div className="ui vertical segment">
                                {this.renderCategories(story)}
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
        stories: state.comics
    }
};

export default connect(
    mapStateToProps,
    { getComicStories }
)(ComicStories);