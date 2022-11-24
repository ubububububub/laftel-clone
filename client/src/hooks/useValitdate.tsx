import { useEffect } from "react";

interface Auth {
  email: string;
  password: string;
  passwordConfirm: string;
}

type JoinAuth = Auth;

type JoinValidate = Auth;

type LoginAuth = Pick<Auth, "email" | "password">;

type LoginValidate = Pick<Auth, "email">;

interface JoinAuthIndex {
  [index: string]: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

type JoinValidateIndex = JoinAuthIndex;

interface LoginAuthIndex {
  [index: string]: string;
  email: string;
  password: string;
}

type LoginValidateIndex = {
  [index: string]: string;
  email: string;
};

interface Auths {
  auth: JoinAuthIndex | LoginAuthIndex;
  validate: JoinValidateIndex | LoginValidateIndex;
  setAuth:
    | React.Dispatch<React.SetStateAction<JoinAuth>>
    | React.Dispatch<React.SetStateAction<LoginAuth>>;
  setValidate:
    | React.Dispatch<React.SetStateAction<JoinValidate>>
    | React.Dispatch<React.SetStateAction<LoginValidate>>;
}

const inputStatus = {
  READY: "ready",
  CORRECT: "correct",
  INCORRECT: "incorrect",
};

interface UseValidateArgs {
  regex?: RegExp;
  name: string;
  auths: Auths;
}

export function useValitdate({ regex, name, auths }: UseValidateArgs) {
  const { auth, validate, setAuth, setValidate } = auths;

  if (!setAuth || !setValidate) {
    return;
  }

  useEffect(() => {
    if (!auth[name].length) {
      return setValidate((current: any) => ({
        ...current,
        [name]: inputStatus.READY,
      }));
    }

    if (!regex && auth.password === auth[name]) {
      return setValidate((current: any) => ({
        ...current,
        [name]: inputStatus.CORRECT,
      }));
    } else {
      setValidate((current: any) => ({
        ...current,
        [name]: inputStatus.INCORRECT,
      }));
    }

    if (regex && regex.test(auth[name])) {
      return setValidate((current: any) => ({
        ...current,
        [name]: inputStatus.CORRECT,
      }));
    }

    return setValidate((current: any) => ({
      ...current,
      [name]: inputStatus.INCORRECT,
    }));
  }, [auth]);

  const handleClearClick = () => {
    setAuth((current: any) => ({ ...current, [name]: "" }));
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setAuth((current: any) => ({ ...current, [name]: target.value }));
  };

  const inValidAuth = () => validate[name] === inputStatus.INCORRECT;

  return {
    authInfo: auth,
    inValidAuth,
    onClearClick: handleClearClick,
    onInputChange: handleInputChange,
  };
}
