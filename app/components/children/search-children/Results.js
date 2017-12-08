// Import React
import React from 'react'
import { 
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

import Article from './results-children/Article'

class Results extends React.Component {
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Results</h3>
        </div>
        <div className="panel-body">
          {this.props.results.map((data, index) => <Article saveArticle={this.props.saveArticle} headline={data.headline.main} web_url={data.web_url} pub_date={data.pub_date} key={index} /> )}
        </div>
      </div>
    );
  }
}

export default Results
