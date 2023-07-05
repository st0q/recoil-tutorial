import { atom } from "recoil";
import { atomKeys } from "../../common/recoilAtomKeys";

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export type TodoListFilter = "Show All" | "Show Completed" | "Show Uncompleted";

export const todoListState = atom<Todo[]>({
  key: atomKeys.TODO_LIST,
  default: [],
});

export const todoListFilterState = atom<TodoListFilter>({
  key: atomKeys.TODO_LIST_FILTER,
  default: "Show All",
});
