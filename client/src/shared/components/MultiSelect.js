import Select from 'react-select';

import { SelectTitle } from './StyledComponents';

const MultiSelect = ({ title, values, options, onChange }) => {

  const MultiSelectStyles = {
    multiValue: (styles) => ({
      ...styles,
      borderRadius: "15px",
      padding: "4px",
      backgroundColor: "#E3EAEF",
      fontWeight: 700,
      fontSize: "80%",
      color: "#748093"
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "#748093",
      textTransform: "uppercase"
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      // backgroundColor: "white",
      borderRadius: "10px",
      ':hover': {
        backgroundColor: '#F68002',
        color: 'white',
      },
    }),
  };

  return (
    <>
      <SelectTitle>{title}</SelectTitle>
      <Select
        styles={MultiSelectStyles}
        value={values.map(ele => ({ label: ele, value: ele.toLowerCase() }))}
        options={options}
        onChange={onChange}
        closeMenuOnSelect={false}
        placeholder={''}
        isClearable={false}
        isMulti
      />
    </>
  );
};

export default MultiSelect;