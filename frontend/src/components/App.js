import React from 'react';
import ComicsList from './ComicsList';


class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <ComicsList/>
            </div>
        )
    }
}

export default App;