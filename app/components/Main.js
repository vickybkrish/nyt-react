// Include React
import React from 'react'

// Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

import axios from 'axios'

// Import components
import Search from './children/Search'
import Saved from './children/Saved'

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            refresh: false
        }
    }

    render() {
        return (
            <HashRouter>
                <div className="container">
                    <div className="jumbotron">
                        <h2><strong>NYTimes React</strong></h2>
                        <p><em>Find and save NYTimes articles</em></p>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-xs-12">
                            <Link to="/"><button className="btn btn-primary btn-lg">Article search</button></Link>
                            <Link to="/Saved"><button className="btn btn-danger btn-lg">Saved articles</button></Link>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-xs-12">
                            <Route exact path="/" component={(props) => <Search {...props} saveArticle={this.saveArticle} />} />
                            <Route path="/Search/:term" component={(props) => <Search {...props} saveArticle={this.saveArticle} />} />
                            <Route path="/Saved" component={(props) => <Saved {...props} />} />
                        </div>
                    </div>

                </div>
            </HashRouter>
        )
    }
}

// Export the component back for use in other files
export default Main
