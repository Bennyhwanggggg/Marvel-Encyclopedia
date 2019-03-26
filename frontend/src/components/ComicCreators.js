import React from 'react';
import { connect } from 'react-redux';
import { getComicCreators } from '../actions';
import { renderList } from '../helpers';

class ComicCreators extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getComicCreators(id);
    }

    render() {
        return (
            <div>
                <div className="ui divided items styled fluid accordion">{renderList(this.props.creators, 'creators')}</div>
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