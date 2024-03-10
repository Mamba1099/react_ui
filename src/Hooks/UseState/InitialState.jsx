// {/*declaring a state variable/*}

import {useState} from 'react'
import './../../css/InitialState.css'


export default function Counter () {
    const [count, setCount] = useState(0);

    function handleClick () {
        setCount(count + 1);
    }

    return (
      <div className="text-button">
        <button onClick={handleClick}>you pressed me {count} times</button>
      </div>
    );

}