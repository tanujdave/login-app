import React from "react";
import styled, { css, withTheme, keyframes } from "styled-components";

const buttonBase = () => css`
  appearance: none;
  cursor: pointer;
  display: inline-block;
  min-width: 10rem;
  height: 3rem;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.5;
  outline: 0;
  padding: 0.5rem 1rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  border: none;
  background: #04834c;
  color: #fff;
  transition: all ease 0.5s;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover,
  &:focus {
    background: #036038;
    text-decoration: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin-top: -1px;
  }
`;

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const generateButtonLoading = () => css`
  border-color: #fff !important;
  color: transparent !important;
  pointer-events: none;
  position: relative;

  &::after {
    animation: ${load} 500ms infinite linear;
    border: 0.2em solid #fff;
    border-radius: 0.5em;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1em;
    left: 50%;
    margin-left: -0.5em;
    margin-top: -0.5em;
    position: absolute;
    top: 50%;
    width: 1em;
  }
`;

const linkMod = () => css`
  background: none;
  border: none;
  color: #1c1722;
  position: relative;
  font-size: 1rem;
  padding: 0;
  height: auto;
  font-weight: 800;
  display: inline;
  text-decoration: underline;
  &:hover,
  &:focus,
  &:visited {
    background: none;
    border: none;
    outline: 0;
    text-decoration: underline;
    &::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const LabelWrap = styled("span")``;

const ButtonWrap = styled("button")`
  &&& {
    ${(props: any) => props.classes}
  }
`;

const LinkWrap = styled("a")`
  &&& {
    ${(props: any) => props.classes}
  }
`;

export interface ButtonProps {
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  isDisabled = false,
  autoWidth = false,
  href,
  kind = "primary",
  type,
  theme,
  ...cleanProps
}) => {
  const asLink = kind === "link";
  const baseCss = buttonBase();
  const classes = [baseCss];
  const loadMod = generateButtonLoading();

  if (asLink) {
    classes.push(linkMod());
  }

  if (isLoading) {
    classes.push(loadMod);
  }

  const newProps: any = {
    ...cleanProps,
    href,
    disabled: isDisabled || isLoading,
  };

  if (!href) {
    newProps.type = type || "button";

    return (
      <ButtonWrap classes={classes} {...newProps}>
        {children}
      </ButtonWrap>
    );
  }

  if (isDisabled) {
    newProps.onClick = (e: any) => e.preventDefault();
  }

  return (
    <LinkWrap classes={classes} {...newProps}>
      <LabelWrap>{children}</LabelWrap>
    </LinkWrap>
  );
};

export default withTheme<any>(Button);
