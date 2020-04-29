import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames'

const TextInputGroup = (props) => {
  const { label, name, value, placeholder, type, onChange, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}        
        className={classnames("form-control", {
            'is-invalid': error
        } )}
        placeholder={placeholder}
        value={value}    
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
      
    </div>
  );
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired ,
    name: PropTypes.string.isRequired ,
    value: PropTypes.string.isRequired ,
    placeholder: PropTypes.string.isRequired ,
    type: PropTypes.string.isRequired ,
    onChange: PropTypes.func.isRequired  , 
    error: PropTypes.string

}

// add some defaults
TextInputGroup.defaultProps = {
    type: 'text' 
}

export default TextInputGroup;
