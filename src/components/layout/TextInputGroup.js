import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = (props) => {
  const { label, name, value, placeholder, type,required, onChange } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}        
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        required={required}        
        onChange={onChange}
      />
    </div>
  );
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired ,
    name: PropTypes.string.isRequired ,
    value: PropTypes.string.isRequired ,
    placeholder: PropTypes.string.isRequired ,
    type: PropTypes.string.isRequired ,
    required: PropTypes.bool.isRequired ,
    onChange: PropTypes.func.isRequired 

}

// add some defaults
TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;
