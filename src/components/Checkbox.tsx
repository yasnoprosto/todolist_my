import s from "./Checkbox.module.css";

type CheckboxProps = {
    tasks: TasksType[]
    onDeleteClick: (taskId: string) => void
    onStatusChangeClick: (taskId: string) => void
}

type  TasksType = {
    id: string,
    title: string,
    isDone: boolean
}
export const Checkbox = (props: CheckboxProps) => {

    const {tasks, onDeleteClick, onStatusChangeClick} = props;

    const mappedTasks = tasks.map((t, index) => {
        const liClassName = t.isDone ? s.completedTask : s.activeTask;
        const onDeleteClickHandler = () => {
            onDeleteClick(t.id);
        };

        const onInputClickHandler = () => {
            onStatusChangeClick(t.id);
        };


        return (
            <li className={liClassName} key={index}>
                <input onClick={onInputClickHandler} id={t.id} type="checkbox" checked={t.isDone}/>
                <span className={s.checkboxText}>{t.title}</span>
                <button onClick={onDeleteClickHandler}>×</button>
            </li>
        );
    });
    return (
        <ul>
            {mappedTasks}
        </ul>
    );
};
