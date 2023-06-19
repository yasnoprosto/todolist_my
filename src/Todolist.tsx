import s from "./Todolist.module.css";
import {Input} from "./components/Input";
import {AddButton} from "./components/AddButton";
import {Checkbox} from "./components/Checkbox";
import {ChangeEvent, useState, KeyboardEvent} from "react";
import {v1} from "uuid";
import {FilterButton} from "./components/FilterButton";
import {SortButton} from "./components/SortButton";

export type FilterType = "All" | "Active" | "Completed";
export type SortType = "Sort A-Z" | "Sort Z-A";
export type SortButtonType = "" | "SORT AZ" | "SORT ZA"


export const Todolist = () => {
    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
    ]);

    const [title, setTitle] = useState<string>("");
    const [filter, setFilter] = useState<FilterType>("All");
    const [activeFilter, setActiveFilter] = useState<FilterType>("All");
    const [activeSort, setActiveSort] = useState<SortButtonType>("");
    const [error, setError] = useState("");

    const filteredTasks = () => {
        switch (filter) {
            case "Active":
                return tasks.filter(t => !t.isDone);
            case "Completed":
                return tasks.filter(t => t.isDone);
            default:
                return tasks;
        }
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const onAddClick = () => {
        if (title.trim()) {
            setTasks([{id: v1(), title: title.trim(), isDone: false}, ...tasks]);
            setTitle("");
        } else {
            setError('Title is required')
        }
    };

    const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        setError("")
        if (e.key === "Enter") {
            onAddClick();
        }
    };

    const onFilterChangeClick = (filter: FilterType) => {
        setFilter(filter);
        setActiveFilter(filter);
    };

    const onDeleteClick = (taskId: string) => {
        const filterTask = tasks.filter(t => t.id !== taskId);
        setTasks([...filterTask]);
    };

    const onStatusChangeClick = (taskId: string) => {
        const mappedTasks = tasks.map(t => t.id === taskId
            ? {...t, isDone: !t.isDone}
            : t
        );
        setTasks(mappedTasks);
    };


    const onSortClick = (sortType: SortType) => {
        let sortedTasks;
        switch (sortType) {
            case "Sort A-Z":
                sortedTasks = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
                setTasks(sortedTasks);
                setActiveSort("SORT AZ");
                break;
            case "Sort Z-A":
                sortedTasks = [...tasks].sort((a, b) => b.title.localeCompare(a.title));
                setTasks(sortedTasks);
                setActiveSort("SORT ZA");
                break;
        }
    };

    return (
        <div className={s.App}>
            <div className={s.title}>TODOLIST</div>
            <div>
                <Input value={title} onChange={onInputChange} onEnterPress={onEnterPress}/>
                <AddButton name={"+"} onAddClick={onAddClick}/>
            </div>
            <div className={s.error}>{error}</div>
            <div>
                <Checkbox tasks={filteredTasks()} onStatusChangeClick={onStatusChangeClick}
                          onDeleteClick={onDeleteClick}/>
            </div>
            <div>
                <FilterButton name={"All"} isActive={activeFilter === "All"} onFilterChangeClick={onFilterChangeClick}/>
                <FilterButton name={"Active"} isActive={activeFilter === "Active"}
                              onFilterChangeClick={onFilterChangeClick}/>
                <FilterButton name={"Completed"} isActive={activeFilter === "Completed"}
                              onFilterChangeClick={onFilterChangeClick}/>
                <SortButton name={"Sort A-Z"} isActive={activeSort === "SORT AZ"} onSortClick={onSortClick}/>
                <SortButton name={"Sort Z-A"} isActive={activeSort === "SORT ZA"} onSortClick={onSortClick}/>
            </div>
        </div>
    );
};
