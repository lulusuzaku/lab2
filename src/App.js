import React from 'react'
import fetchJsonp from 'fetch-jsonp'
export default function App() {
    const [data, setData] = React.useState([]);
    const [input, setInput] = React.useState("1");
    const inputRef = React.useRef();

    React.useEffect(() => {
        Request(setData,input);
        //setInterval(() => {Request(setData);}, 10000);
    }, [input]);

    const handleClick = () => {
        setInput(inputRef.current.value);
    };

    return <div>
        <form onSubmit={event=>{event.preventDefault();handleClick()}}>
            <input ref={inputRef} />
            <button type="submit" >Нажми сюда</button>
            <br></br>
            <img src={data.photo_400_orig} ></img>
        </form>
        {data.status}
    </div>;
}

const Request = (setData,input) => {
    const url = `https://api.vk.com/method/users.get?user_ids=${input}&fields=status,photo_400_orig&access_token=d365c887d365c887d365c887d9d30b8000dd365d365c8878e84da3432d7b878418946f9&v=5.103`;
    fetchJsonp(url)
        .then(response => response.json())
        .then(data => {
            setData(data.response[0]);
            console.log(data);
        });
}
