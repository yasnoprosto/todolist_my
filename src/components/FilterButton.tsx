import {FilterType} from "../Todolist";
import s from "./FilterButton.module.css";

type FilterButtonProps = {
    name: FilterType
    onFilterChangeClick: (filter: FilterType) => void
    isActive: boolean
}
export const FilterButton = (props: FilterButtonProps) => {
    const {name, onFilterChangeClick, isActive} = props;
    const btnClassName = `${isActive ? s.active : s.default}`;


    const onClickHandler = () => {
        onFilterChangeClick(name);
    };

    return (
        <button className={btnClassName} onClick={onClickHandler}>{name}</button>
    );
};