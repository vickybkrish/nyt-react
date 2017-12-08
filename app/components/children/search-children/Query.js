// Import React
import React from 'react'

import { HashRouter, Route, Link} from 'react-router-dom'
// Import axios
import axios from 'axios'

class Query extends React.Component {
    constructor() {
        super()
        this.state = {
            term: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    // This function will respond to the user input
    handleChange(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Query</h3>
                </div>
                <div className="panel-body">
                    <div className="input-group">
                        <input className="form-control" type="text" onChange={this.handleChange} value={this.state.term} />
                        <span className="input-group-btn">
                            <HashRouter>
                                <Link to={'/Search/' + this.state.term}><button disabled={(this.state.term.length > 0 ? false : true)} className="btn btn-default" type="button">Go!</button></ Link>
                            </ HashRouter>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Query
