import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { getComicCharacters } from '../actions';
import { renderItems } from '../helpers';

class ComicCharacters extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getComicCharacters(id);
    }

    renderCategories = (character) => {
        if (!_.isEmpty(character.comics)) {
            return (
                <div className="ui list">
                    <div className="item" key={`${character.id}-comics`}>
                        <div className="header">
                            Appeared in comics
                        </div>
                        {character.comics.available}
                        <div>
                            Some of these are:
                            {renderItems(character.comics.items, 'comics')}
                        </div>
                    </div>
                    <div className="item" key={`${character.id}-events`}>
                        <div className="header">
                            Number of events
                        </div>
                            {character.events.available}
                        <div>
                            Some of these are:
                            {renderItems(character.events.items, 'events')}
                        </div>
                    </div>
                    <div className="item" key={`${character.id}-stories`}>
                        <div className="header">
                            Number of stories appeared in
                        </div>
                        {character.stories.available}
                        <div>
                            Some of these are:
                            {renderItems(character.stories.items, 'stories')}
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
        if (!_.isEmpty(this.props.characters)){
            if (!this.props.characters.results.length){
                return (
                    <div>This comic has no characters</div>
                )
            }
            return this.props.characters.results.map(character => {
                return (
                    <div className="item title" key={character.id}>
                        <i className="dropdown icon"></i>
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
                                {this.renderCategories(character)}
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
        characters: state.comics
    }
};

export default connect(
    mapStateToProps,
    { getComicCharacters }
)(ComicCharacters);