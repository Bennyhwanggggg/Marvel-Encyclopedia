import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { getComicCreators } from '../actions';
import { renderItems } from '../helpers';

class ComicCreators extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getComicCreators(id);
    }

    renderCategories = (creator) => {
        if (!_.isEmpty(creator.comics)) {
            return (
                <div className="ui list">
                    <div className="item">
                        <div className="header">
                            Number of comics created
                        </div>
                        {creator.comics.available}
                        <div>
                            Some of these are:
                            {renderItems(creator.comics.items, 'comics')}
                        </div>
                    </div>
                    <div className="item">
                        <div className="header">
                            Number of events
                        </div>
                            {creator.events.available}
                        <div>
                            Some of these are:
                            {renderItems(creator.events.items, 'events')}
                        </div>
                    </div>
                    <div className="item">
                        <div className="header">
                            Number of stories created
                        </div>
                        {creator.stories.available}
                        <div>
                            Some of these are:
                            {renderItems(creator.stories.items, 'stories')}
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
        console.log(this.props.creators)
        if (this.props.creators){
            if (!this.props.creators.results.length){
                return (
                    <div>This comic has no events</div>
                )
            }
            return this.props.creators.results.map(creator => {
                return (
                    <div className="item title" key={creator.id}>
                        <i className="dropdown icon"></i>
                        <div className="image">
                            <img src={`${creator.thumbnail.path}/portrait_medium.${creator.thumbnail.extension}`} alt="thumbnail"/>
                        </div>
                        <div className="content">
                            <div className="header">
                                {creator.fullName}
                            </div>
                            <div className="description">
                                {creator.description}
                            </div>
                            <div className="ui vertical segment">
                                {this.renderCategories(creator)}
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
        creators: state.comics
    }
};

export default connect(
    mapStateToProps,
    { getComicCreators }
)(ComicCreators);