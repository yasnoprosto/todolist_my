import s from "./AddButton.module.css"

type ButtonProps = {
    name: string
    onAddClick:()=>void
}
export const AddButton = (props: ButtonProps) => {
    const {name, onAddClick} = props
    const onClickHandler = () => onAddClick();

    return (
            <button className={s.buttonAdd} onClick={onClickHandler}>{name}</button>
    );
};