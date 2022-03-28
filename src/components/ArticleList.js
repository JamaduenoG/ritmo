import { useEffect, useState } from 'react';
import Article from "./Article";

const ArticleList = ({articles}) => {

    const [shoWArticleList, setShowArticleList] = useState(false);

    useEffect(() => {
        const showContent = (content) => {
          return content.length > 0
        }
        setShowArticleList(showContent(articles))
      }, [articles])

    return (
        <>
            <div className={`articles-list ${!shoWArticleList ? 'hidden' : null}`}>
                {articles.map((article) => (
                    <Article article={article} key={article._id} />
                ))} 
            </div>
            <div className={`center ${shoWArticleList ? 'hidden' : null}`}>
                {!shoWArticleList && <p>There are no items</p> }
            </div>
        </>
    );
}

export default ArticleList;