import React from 'react';
import { connect } from 'react-redux';
import { getComicStories } from '../actions';
import { renderList } from '../helpers';

class ComicStories extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getComicStories(id);
    }

    render() {
        return (
            <div>
                <div className="ui divided items styled fluid accordion">{renderList(this.props.stories, 'stories')}</div>
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