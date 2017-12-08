// Import React
import React from 'react'
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

import axios from 'axios'

class SavedArticle extends React.Component {
    constructor() {
        super()
        this.state = {
            deleted: false
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        axios.put("/api/delete", { headline: this.props.headline }).then((response) => {
            this.setState({ deleted: true })
            setTimeout(() => { 
                this.props.updateParent();
            }, 3000) 
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="well">
                        <div className="row">
                            <div className="col-xs-6">
                                {(this.state.deleted ? <h4>{this.props.headline}</h4> : <a href={this.props.web_url}><h4>{this.props.headline}</h4></a>)}
                            </div>
                            <div className="col-xs-4">
                                <h4>{(this.state.deleted ? <span>Deleted!</span> : this.props.pub_date)}</h4>
                            </div>
                            <div className="col-xs-2">
                                <div className="text-right">
                                    <button className="btn btn-default btn-right" onClick={this.handleDelete} disabled={(this.state.deleted ? true : false)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SavedArticle
