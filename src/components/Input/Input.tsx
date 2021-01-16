import React, { forwardRef } from "react";
import styled, { css, withTheme } from "styled-components";

const containerCss = () => css`
  position: relative;
  display: inline-block;
  padding-bottom: 0;
  text-align: left;
  vertical-align: middle;
  color: #242b33;
`;

const containerBlock = css`
  display: block;
  width: 100%;
`;

const inputCss = () => css`
  display: flex;
  border: 2px solid #d5dadf;
  border-radius: 0.25rm;
  background-color: #ffffff;

  input {
    background-color: transparent !important;
    border: 0;
    outline: 0;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    padding: 0 20px;
  }
`;

const inputCssError = () => css`
  border-color: #ff5f56;  
`;

const ContainerSpan = styled("span")<any>`
  &&& {
    ${(props: any) => props.cClass}
  }
`;

const InputWrapperSpan = styled("span")<any>`
  &&& {
    ${(props: any) => props.iClass}
  }
`;

export interface InputProps {
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  required,
  error,
  isBlock,
  hasError,
  disabled,
  readOnly,
  className,
  inputRef,
  labelComponent: LabelComponent,
  ...rest
}) => {
  const uid = id || `input-${+new Date()}${Math.random() * 100}`;  
  const inputClass = inputCss();
  const containerClass = containerCss();

  const errorClass = inputCssError();

  const cClass = [containerClass];
  const iClass = [inputClass];

  if (isBlock) {
    cClass.push(containerBlock);
  }

  if (hasError) {
    iClass.push(errorClass);
  }

  return (
    <ContainerSpan cClass={cClass} className={className || ""}>
      {label &&
        ((LabelComponent && (
          <LabelComponent htmlFor={uid}>{label}</LabelComponent>
        )) || <label htmlFor={uid}>{label}</label>)}
      <InputWrapperSpan iClass={iClass}>
        <input
          type={type}
          id={uid}
          required={required}
          aria-required={required}
          disabled={disabled}
          readOnly={readOnly}
          ref={inputRef}
          {...rest}
        />
      </InputWrapperSpan>      
    </ContainerSpan>
  );
};

const ComponentInput = withTheme<any>(Input);

export default forwardRef<HTMLInputElement, any>((props, ref) => {
  return <ComponentInput {...props} inputRef={ref} />;
});
