import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getComicCharacters } from '../actions';

class ComicCharacters extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getComicCharacters(id);
    }


    renderList() {
        if (!_.isEmpty(this.props.comics)){
            return this.props.comics.results.map(character => {
                return (
                    <div className="item" key={character.id}>
                        <div className="image">
                            <img src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`} alt="thumbnail"/>
                        </div>
                        <div className="content">
                            <div className="header">
                                {character.name}
                            </div>
                            <div className="description">
                                {character.description}
                            </div>
                            <div className="ui vertical segment">
                                <div className="ui list">
                                    <div className="item">
                                        <div className="header">
                                            Appeared in comics
                                        </div>
                                        {character.comics.available}
                                    </div>
                                    <div className="item">
                                        <div className="header">
                                            Number of events
                                        </div>
                                        {character.events.available}
                                    </div>
                                    <div className="item">
                                        <div className="header">
                                            Number of stories appeared in
                                        </div>
                                        {character.stories.available}
                                    </div>
                                    <div className="item">
                                        <div className="header">
                                            Number of series appeared in
                                        </div>
                                        {character.series.available}
                                    </div>
                                </div>
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
                <div className="ui divided items">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comics: state.comics
    }
};

export default connect(
    mapStateToProps,
    { getComicCharacters }
)(ComicCharacters);