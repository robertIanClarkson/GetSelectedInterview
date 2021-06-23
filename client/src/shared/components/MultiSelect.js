import Select from 'react-select';

import { SelectTitle } from './StyledComponents';

const MultiSelect = ({ title, values, options, onChange }) => {
  return (
    <>
      <SelectTitle>{title}</SelectTitle>
      <Select 
        value={values.map(ele => ({ label: ele, value: ele.toLowerCase() }))}
        options={options}
        onChange={onChange}
        isMulti
      />
    </>
  );
};

export default MultiSelect;