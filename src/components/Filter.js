import { useState } from 'react';

const Filter = ({event}) => {

    const [beginDate, setBeginDate] = useState(() => '');
    const [endDate, setEndDate] = useState(() => '');

    const onChangeInput = (e) => {
        switch(e.target.id) {
          case 'begin_date':
            setBeginDate(e.target.value);
            break;
          default:
            setEndDate(e.target.value);
        }
        event(e);
      }

    return (

        <div className='filter'>
            <input id='begin_date' type='date' value={beginDate} onChange={e => onChangeInput(e)} /> 
            <input id='end_date' type='date' value={endDate} onChange={e => onChangeInput(e)} /> 
        </div>
    );
}

export default Filter;