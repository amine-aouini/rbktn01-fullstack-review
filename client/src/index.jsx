import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentWillMount() {
    axios.get('/repos')
      .then(results => {
        this.setState({ repos: results.data.results });

      })
      .catch(err => console.log('this is a nono: ', err))
  }

  search(term) {
    console.log(`${term} was searched`);
    // TODO
    axios.post('/repos', {
      term: term
    })

  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)} />
      <RepoList repos={this.state.repos} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));