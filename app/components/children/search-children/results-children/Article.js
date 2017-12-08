// Import React
import React from 'react'
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

import axios from 'axios'

class Article extends React.Component {
    constructor() {
        super()
        this.state = {
            saved: false
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.saveArticle = this.saveArticle.bind(this);
    }

    handleSave(event) {
        const article = {
            headline: this.props.headline,
            web_url: this.props.web_url,
            pub_date: this.props.pub_date
        }
        this.saveArticle(article);
    }
    
    saveArticle(article) {
        axios.post("/api/new", article).then((response) => {
            if (response) {
               this.handleResponse()
            }
        })
    }
    handleResponse() { 
        this.setState({
            saved: true
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="well">
                        <div className="row">
                            <div className="col-xs-6">
                                <a href={this.props.web_url}><h4>{this.props.headline}</h4></a>
                            </div>
                            <div className="col-xs-4">
                                <h4>{this.props.pub_date}</h4>
                            </div>
                            <div className="col-xs-2">
                                <div className="text-right">
                                    <HashRouter>
                                        <button className="btn btn-default btn-right" onClick={this.handleSave} disabled={(this.state.saved ? true : false)}>{(this.state.saved ? 'Saved!' : 'Save')}</button>
                                    </HashRouter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article
