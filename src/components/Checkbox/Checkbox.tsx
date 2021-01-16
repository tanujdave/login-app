import React, { forwardRef } from "react";
import styled, { withTheme } from "styled-components";

const CheckboxItem = styled.label`
  position: relative;
  display: inline-flex;
  margin-right: 1.5rem;
  cursor: pointer;  
  &:last-child {
    margin-right: 0;
  }
  .check-label {
    font-size: 1.1rem;
    line-height: 1.3;
    font-weight: 500;
    padding-left: 0.25rem;
    pointer-events: none;
    flex: 24; 
  }
  input[type="checkbox"] {
    height: 15px;
    width: 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid #1c1722;
    border-radius: 0;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    margin-left: 0;
    transition: all ease 0.5s;
    &:checked {
      appearance: auto;
    }
  }
`;

interface CheckboxProps {
  [key: string]: any;
}

const Checkbox: React.FC<CheckboxProps> = ({
  inputRef,
  label,
  value,
  checkIcon,
  ...otherProps
}) => {
  return (
    <CheckboxItem>
      <input {...otherProps} value={value} ref={inputRef} type="checkbox" />{" "}
      {label && <span className="check-label">{label}</span>}
    </CheckboxItem>
  );
};

const ComponentInput = withTheme<any>(Checkbox);

export default forwardRef<HTMLInputElement, any>((props, ref) => {
  return <ComponentInput {...props} inputRef={ref} />;
});
