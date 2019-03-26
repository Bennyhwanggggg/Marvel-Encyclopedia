import React from 'react';
import { connect } from 'react-redux';
import { getComicEvents } from '../actions';
import { renderList } from '../helpers';

class ComicEvents extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getComicEvents(id);
    }

    render() {
        return (
            <div>
                <div className="ui divided items styled fluid accordion">{renderList(this.props.events, 'events')}</div>
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