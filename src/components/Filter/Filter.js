import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/phonebook/phonebookSlice';
import { FilterLabel } from 'components/Filter/Filter.styled';

const Filter = () => {
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      <span>Find contacts by name </span>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </FilterLabel>
  );
};

export default Filter;
