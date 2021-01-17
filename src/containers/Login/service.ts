import { post } from "../../utils/api";

export const login = async ({
  email,
  password,
  remember_me,
}: {
  email: string;
  password: string;
  remember_me: boolean;
}) => {
  const path = `/login`;
  try {
    const resp = await post(path, { email, password, remember_me });
    const result = resp.data;
    if (!result.token) {
      throw new Error("The email address or password you entered is incorrect.");
    }
    return result.token;
  } catch (err) {
    throw new Error(err.message);
  }
};
