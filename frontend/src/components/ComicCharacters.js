import React from 'react';
import { connect } from 'react-redux';
import { getComicCharacters } from '../actions';
import { renderList } from '../helpers';

class ComicCharacters extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getComicCharacters(id);
    }

    render() {
        return (
            <div>
                <div className="ui divided items styled fluid accordion">{renderList(this.props.characters, 'characters')}</div>
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