import styled, { keyframes } from "styled-components";

export const LoginPage = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
export const Container = styled("div")``;
const RightToLeftFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 20%);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
export const BoxLogin = styled("div")`
  width: 400px;
  background: #fff;
  border-top: #06874e solid 2.5px;
  padding: 28px 30px;
  opacity: 0;
  transform: translate(0, 20%);
  animation: ${RightToLeftFadeIn} 0.8s ease forwards;
`;
export const Title = styled("h4")`
  color: #212533;
  text-align: center;
  padding-bottom: 5px;
  margin: 0;
`;
export const FieldRow = styled("div")`
  padding-bottom: 1rem;
`;
export const Label = styled("label")`
  color: #212533;
  font-weight: 800;
  font-size: 1.2rem;
`;
export const ErrorMessage = styled("div")`
  background: #ff5f56;
  color: #fff;
  padding: 10px 20px;
  margin: 20px 0;
  font-size: 0.85rem;
  border-left: #ba140b solid 5px;
`;
export const BottomLink = styled("div")`
  text-align: center;
  line-height: 2;
  font-weight: 400;
`;
