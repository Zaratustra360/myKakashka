import {useState} from "react";

export const TotalTodo = (props) => {
    const [counter, setCounter] = useState(0)
    return <div className="counter">
        {counter}
    </div>
}