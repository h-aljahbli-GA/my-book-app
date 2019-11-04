import React, { Component } from 'react';
import './App.css';
import parser from 'xml-js';
import BookCards from './Pages/BookCards';
import Favorites from './Pages/Favorites';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorites: [],
      collection: [],
      search:[]
    }
  }

  
  componentDidMount() {
    const key = 'AiY0kCwWYFSK3RilpXntbQ';
    const query = 'hobbit'
    const page = '';
    const searchCriteria = 'all'


    const url =  `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?q=${query}&page${page}&key=${key}&search=${searchCriteria}`
    // console.log(url);

    fetch(url)
    .then((resp) => {
      resp.text()
        .then(str => {

        // turns response from XML to json
        let json = parser.xml2js(str, {
          compact: true,
          ignoreDoctype: true,
          attributesKey: "attributes"
        });      
        
        // book search querry location 
        const querryResult = json.GoodreadsResponse.search.results.work;
        // console.log(json.GoodreadsResponse.search.results.work)

        
        // add new book items to search state
        let searcharray= []
        const bookContents = (querryResult).map((item, index) => {
          // console.log(item)
          searcharray.push(item.best_book.title._text)
        })     

        this.setState({
          search: searcharray
        })
        // check current state after adding books
        // console.log(this.state.search);
      })
    })

    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    
    return (
      <div className="App">

        <header>
          <nav>
            <collection>| Collections filter | </collection>
            {/* <favorites>| Favorites filter | </favorites> */}
            <Favorites favorites={this.state.favorites}/>

          </nav>
        </header>

        <body>

          <h2>body things to be here</h2>

          <ul>
            <BookCards search={this.state.search} favorites ={this.state.favorites} />
          </ul>

        </body>


        <footer>
          <h2>dis be footer</h2>
        </footer>
      </div>
    );
  }
}

export default App;
