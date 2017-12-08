// Include React
import React from 'react'

import axios from 'axios'

import SavedArticle from './saved-children/SavedArticle.js'

class Saved extends React.Component {
    constructor() {
        super();
        this.state = {
            savedArticles: [],
        }
        this.getAllArticles = this.getAllArticles.bind(this);
        
    }
    componentDidMount() { 
        this.getAllArticles();  
    }
    getAllArticles() {
        axios.get(`/api/all`).then((response) => {
            if (response) {
                this.setState({
                    savedArticles: response.data
                })
            }
        })
    }
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body">
                    <div className="panel-body">
                        {this.state.savedArticles.map((article, index) => <SavedArticle updateParent={this.getAllArticles} deleted={false} headline={article.headline} web_url={article.web_url} pub_date={article.pub_date} key={index} />)}
                    </div>
                </div>
            </div>
        );
    }
}


export default Saved