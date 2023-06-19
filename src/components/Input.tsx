import {ChangeEvent, KeyboardEvent} from "react";
import s from "./Input.module.css";

type InputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
    onEnterPress: (e: KeyboardEvent<HTMLInputElement>) => void
};

export const Input = (props: InputProps) => {
    const {onChange, value, onEnterPress} = props;

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        onEnterPress(e);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    };

    return (
        <input className={s.inputText} value={value} onKeyDown={onKeyDownHandler} onChange={onChangeHandler}
               type="text"/>
    );
};