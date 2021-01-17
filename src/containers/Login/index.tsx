import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Input, Button, Checkbox } from "../../components";
import {
  LoginPage,
  Container,
  BoxLogin,
  Title,
  FieldRow,
  ErrorMessage,
  BottomLink,
  Label,
} from "./style";
import { login } from "./service";

type FormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, errors }: any = useForm<FormInputs>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleAuthUser = async (data: any) => {
    setLoading(true);
    setError("");
    try {
      const token = await login(data);
      alert(token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginPage>
      <Container>
        <BoxLogin>
          <Title>Sign in</Title>
          <form onSubmit={handleSubmit(handleAuthUser)}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {"" === error && Object.keys(errors).length > 0 && (
              <ErrorMessage
                dangerouslySetInnerHTML={{
                  __html: Object.entries(errors).reduce(
                    (acc: string, cur: any) =>
                      (acc += `<div>${cur[cur.length - 1].message}</div>`),
                    ""
                  ),
                }}
              />
            )}
            <FieldRow>
              <Input
                isBlock
                autoFocus={true}
                name="email"
                type="text"
                label="Email"
                tabIndex={0}
                ref={register({
                  required: "Enter an email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter valid email address",
                  },
                })}
                error={errors.email && errors.email.message}
                hasError={errors.email}
                labelComponent={Label}
              />
            </FieldRow>
            <FieldRow>
              <Input
                isBlock
                name="password"
                type="password"
                label="Password"
                ref={register({ required: "Enter a password" })}
                error={errors.password && errors.password.message}
                hasError={errors.password}
                labelComponent={Label}
              />
            </FieldRow>
            <FieldRow>
              <Checkbox
                label="Remember me?"
                name="remember_me"
                ref={register}
              />
            </FieldRow>
            <FieldRow>
              <Button type="submit" isLoading={loading}>
                Sign in
              </Button>
              <Button style={{ display: "none" }} isLoading={true}></Button>
            </FieldRow>

            <BottomLink>
              <Button href="#" kind="link">
                Forgot your password?
              </Button>
            </BottomLink>
            <BottomLink>
              Don't have an account?{" "}
              <Button href="#" kind="link">
                Sign up
              </Button>
            </BottomLink>
            <BottomLink>
              <Button href="#" kind="link">
                Resend email confirmation
              </Button>
            </BottomLink>
          </form>
        </BoxLogin>
      </Container>
    </LoginPage>
  );
};

export default Login;
