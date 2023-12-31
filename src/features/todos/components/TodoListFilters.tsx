import { useRecoilState } from "recoil";
import { todoListFilterState } from "../state";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  // @ts-expect-error Binding element 'value' implicitly has an 'any' type.
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
