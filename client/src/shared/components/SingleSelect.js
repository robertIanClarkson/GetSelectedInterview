import Select from 'react-select';

import { SelectTitle } from './StyledComponents';

const SingleSelect = ({ title, value, options, onChange }) => {
  return (
    <>
      <SelectTitle>{title}</SelectTitle>
      <Select 
        defaultValue={{
          label: value, 
          value: value
        }}
        options={options.map(ele => ({label: ele, value: ele.toLowerCase()}))}
        onChange={onChange}
      />
    </>
  );
};

export default SingleSelect;