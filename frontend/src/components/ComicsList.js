import React from 'react';
import { connect } from 'react-redux';
import { getComics } from '../actions';

class CommicList extends React.Component {
    componentDidMount() {
        this.props.getComics();
    }
    render() {
        return (
            <div>hi</div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        results: state.data
    }
};

export default connect(
    mapStateToProps,
    { getComics }
)(CommicList);