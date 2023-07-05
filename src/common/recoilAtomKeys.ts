// A unique string used to identify the selector internally. This string should be unique with respect to other atoms and selectors in the entire application.
// https://recoiljs.org/docs/api-reference/core/selector/
export const atomKeys = {
  TODO_LIST: "TodoListAtom",
  TODO_LIST_FILTER: "TodoListFilterAtom",
} as const satisfies {
  // selector の key と重複しないように値は Atom で終わる文字列に限定する
  [key: string]: `${string}Atom`;
};
