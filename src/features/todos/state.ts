import { atom } from "recoil";
import { atomKeys } from "../../common/recoilKeys";

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<Todo[]>({
  key: atomKeys.TODO_LIST,
  default: [],
});
