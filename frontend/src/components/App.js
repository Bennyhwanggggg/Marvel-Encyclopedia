import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ComicsList from './ComicsList';
import Comic from './Comic';
import ComicCharacters from './ComicCharacters';
import ComicCreators from './ComicCreators';
import ComicEvents from './ComicEvents';
import ComicStories from './ComicStories';
import Header from './Header';
import history from '../history';



class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header/>
                        <Switch>
                            <Route path="/" exact component={ComicsList}/>
                            <Route path="/comics/:id" exact component={Comic}/>
                            <Route path="/comics/:id/creators" exact component={ComicCreators}/>
                            <Route path="/comics/:id/characters" exact component={ComicCharacters}/>
                            <Route path="/comics/:id/events" exact component={ComicEvents}/>
                            <Route path="/comics/:id/stories" exact component={ComicStories}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;