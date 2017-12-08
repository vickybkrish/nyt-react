// Import React
import React from 'react'

import axios from 'axios'

// Import child components
import Query from './search-children/Query'
import Results from './search-children/Results'

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResults: []
        }
        this.handleResults = this.handleResults.bind(this);
    }
    handleResults(results) {
        console.log('handle results');
        this.setState({
            searchResults: results
        })
    }
    render() {
        if (this.props.match.params.term) {
            const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4e296b3423a148a9b6ec9b078a991d26&q=" + this.props.match.params.term;
            axios.get(url).then((response) => {
                this.handleResults(response.data.response.docs);
            })
        }
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
                <div className="panel-body">
                    <Query />
                    <Results saveArticle={this.props.saveArticle} results={this.state.searchResults} />
                </div>
            </div>
        )
    }
}


export default Search