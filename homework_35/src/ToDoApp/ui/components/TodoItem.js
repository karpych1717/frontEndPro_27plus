// Core
import {useDispatch, useSelector} from "react-redux";
// Parts
import Button from "./form/Button";
// Engine
import { todosActions, todosSelectors } from "../../engine/core/todos/slice";

function TodoItem(props) {
    const { text, id } = props;
    const items = useSelector(todosSelectors.items);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(todosActions.removeItem(id));
        const newItems = items.filter(item => item.id !== id)
        localStorage.setItem('items', JSON.stringify(newItems));
    }
    return (
        <div className="todo-item">
            <div className="todo-item__description">{text}</div>
            <Button
                text="Удалить"
                onClick={onClick}
                customClass="todo-item__delete"
            />
        </div>
    )
}
export default TodoItem;
