import {useState} from "react";
import style from './TopButton.module.sass'

export const Todo = (props) => {
    const {title, description} = props
    console.log(title)
    return (
              <div>
             <p>{title}</p>
            <p>{description}s</p>
         </div>
    )



    // <div>
    //     <input type="checkbox" id={item.title}/>
    //     <label htmlFor={item.title}>{item.title}</label>
    //     <p>{item.description}</p>
    // </div>
}

export const TodoList = () => {
    const [todos, setTodo] = useState([
        {title: 'Pizdec', description: 'Lorem ipsum'},
        {title: 'Pizdec2', description: 'Lorem ipsum123'}
    ])
    return <div className={style.box}>
        {todos.map((item, index) => {
          return <Todo key={index} {...item} />
        })}

    </div>
}

