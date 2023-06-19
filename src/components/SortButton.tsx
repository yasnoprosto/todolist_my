import {SortType} from "../Todolist";
import s from "./SortButton.module.css"

type SortButtonProps = {
    name: SortType
    onSortClick: (sortType: SortType) => void
    isActive: boolean
}
export const SortButton = (props: SortButtonProps) => {
    const {name, onSortClick, isActive} = props
    const btnClassName = `${isActive ? s.active : s.default}`

    const onClickHandler = () => {
        onSortClick(name)
    }

    return (
            <button className={btnClassName} onClick={onClickHandler}>{name}</button>
    );
};