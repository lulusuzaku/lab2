import React from 'react'


const Request = require('../src/module').Request;

export default function App() {
    const [data, setData] = React.useState([]);
    const [input, setInput] = React.useState("1");
    const inputRef = React.useRef();

    
    React.useEffect(() => {
        Request(setData, input);
    }, [input]);

    const handleClick = () => {
        setInput(inputRef.current.value);
    };

    return <div>
        <form onSubmit={event => { event.preventDefault(); handleClick() }}>
            <input ref={inputRef} />
            <button type="submit" >Нажми сюда</button>
            <br></br>
            <img src={data.photo_400_orig} ></img>
        </form>
        {data.status}
    </div>;
}