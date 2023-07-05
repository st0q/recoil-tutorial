// A unique string used to identify the selector internally. This string should be unique with respect to other atoms and selectors in the entire application.
// https://recoiljs.org/docs/api-reference/core/selector/
export const selectorKeys = {
  FILTERED_TODO_LIST: "FilteredTodoListSelector",
  TODO_LIST_STATS: "TodoListStatsSelector",
} as const satisfies {
  // atom の key と重複しないように値は Selector で終わる文字列に限定する
  [key: string]: `${string}Selector`;
};
