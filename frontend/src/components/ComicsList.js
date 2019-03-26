import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { getComics } from '../actions';

class CommicList extends React.Component {
    componentDidMount() {
        this.props.getComics();
    }

    renderList() {
        if (!_.isEmpty(this.props.comics)){
            return this.props.comics.results.map(comic => {
                return (
                    <div className="item" key={comic.id}>
                        <div className="image">
                            <img src={`${comic.thumbnail.path}/portrait_medium.${comic.thumbnail.extension}`} alt="thumbnail"/>
                        </div>
                        <div className="content">
                            <div className="header">
                                {comic.title}
                            </div>
                            <div className="description">{
                                comic.description}
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
                <h2>Comics</h2>
                <div className="ui items">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        comics: state.comics
    }
};

export default connect(
    mapStateToProps,
    { getComics }
)(CommicList);