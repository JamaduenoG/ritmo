import Moment from 'moment';
import Calendar from '../assets/icons/calendar.svg';
import Category from '../assets/icons/category.svg';

const Article = ({article}) => {

    const {
        key: id,
        headline: {main: title},
        section_name: section,
        pub_date: date,
        abstract: content,
        web_url: url
    } = article;

    return (
        <div className='article' key={id}>
            <h3>{title}</h3>
            <div className='attributes'>
                <div>
                    <img className='icon' src={Category} alt='Category icon' /> {section}
                </div>
                <div>
                    <img className='icon' src={Calendar} alt='Calendar icon' /> {Moment(date).format('d MMM')}
                </div>
            </div>
            <p>{content}</p>
             <a href={url} target='_blank' rel='noreferrer'>
                 <button>See more</button>
            </a>
        </div>
    );
}

export default Article;