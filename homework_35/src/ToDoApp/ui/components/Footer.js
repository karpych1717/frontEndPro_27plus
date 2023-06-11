// Core
import {useSelector, useDispatch} from "react-redux";
// Parts
import Button from "./form/Button";
// Engine
import {todosSelectors, todosActions} from "../../engine/core/todos/slice";

export function Footer() {
    const length = useSelector(todosSelectors.length);
    const dispatch = useDispatch();
    const clearValue = () => {
        dispatch(todosActions.addItems([]));
        localStorage.setItem('items', JSON.stringify([]));
    }
    return (
        <footer>
            length: {length}
            <Button onClick={clearValue} text="Clear" />
        </footer>
    )
}
