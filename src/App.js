import { useDispatch, useSelector } from 'react-redux'
import "./App.css";
import { changeCountAction, changeCountMinusAction } from './store/counterReducer';
import { useState } from 'react';

function App() {

  const dispatch = useDispatch()
  const counter = useSelector(store => store.count)
  const [darts, setDarts] = useState(0)
  console.log(counter);
  console.log(darts);

  const sum = counter.reduce((acc, el) => acc + el.count, 0)
  console.log(sum); 

  const [average, setAverage] = useState(0) 

  const averagefunc = () => {
    setDarts(darts+3)
    setAverage(sum)
  }

  console.log(average/darts);

  return (
    <div className="wrapper">
      <div className="buttons">
        {counter.map((el) => (
          <div key={el.id} 
          onClick={() => dispatch(changeCountAction(el.id))}
          >{el.title}</div>
        ))}
      </div>
      <div className="buttons_info">
        {counter.map((el) => (
          <div key={el.id}>{el.count}</div>
        ))}
      </div>
      <div className="buttons_minus">
        {counter.map((el) => (
          <div key={el.id} onClick={() => dispatch(changeCountMinusAction(el.id))}>-</div>
        ))}
      </div>
      <p>{Math.round((average / darts > 0 ? average / darts : 0) * 100)}% ({average}/{darts})</p>
      <div className="enter" onClick={averagefunc}>Enter</div>
    </div>
  );
}

export default App;
