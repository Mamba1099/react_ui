import {useState} from "react"

export default function MyInput() {
    const [text, setText] = useState('hello')

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <input className='input-field' placeholder='text' value={text} onChange={handleChange} />
                <p>you typed: {text} </p>
                <button onClick={() => setText('hello')}>Reset</button>
        </>
    );
}
