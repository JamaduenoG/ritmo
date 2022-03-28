import { useEffect, useState } from 'react';
import './Article.css';
import axios from 'axios';
import Header from './components/Header';
import Filter from './components/Filter';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';

const App = () => {

  const [articles, setArticles] = useState(() => []);
  const [filter, setFilter] = useState(() => {});

  /**
   * Add the correct format data and set the new filter value
   * @param {Object} event 
   */
  const onChangeFilter = (e) => {
    let value = e.target.value;
    value = value.replace(/-/gi, '')
    console.log(value);
    setFilter({...filter, [e.target.id]: value});
  }

  useEffect(() => {
    const getData = () => {
      axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json',
        {
          params: {...filter, 'api-key':'h1cU04oP2OM8dblrnkYzgkByOMcVlhwK'}
        }
      )
        .then((response) => {
          setArticles(response.data.response.docs);
        })
        .catch((error) => {
          console.error(error)
        });
    }
    getData()
  }, [filter])

  return (
    <div className="app">
      <Header>
        <Filter event={onChangeFilter} />
      </Header>
      <div className='content min view-height'>
        <ArticleList articles={articles} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
