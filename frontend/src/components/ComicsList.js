import React from 'react';
import { connect } from 'react-redux';
import { getComics } from '../actions';
import { renderList } from '../helpers';

class CommicList extends React.Component {
    componentDidMount() {
        this.props.getComics();
    }

    render() {
        return (
            <div>
                <h2>Comics</h2>
                <div className="ui items">{renderList(this.props.comics, 'comicList')}</div>
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
    { getComics }
)(CommicList);