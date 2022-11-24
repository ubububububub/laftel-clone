import { useEffect } from "react";

interface Auth {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface JoinAuth {
  [index: string]: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface LoginAuth {
  [index: string]: string;
  email: string;
  password: string;
}

interface Auths {
  auth: JoinAuth | LoginAuth;
  validate: JoinAuth;
  setAuth?: React.Dispatch<React.SetStateAction<Auth>>;
  setValidate?: React.Dispatch<React.SetStateAction<Auth>>;
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
      return setValidate(current => ({
        ...current,
        [name]: inputStatus.READY,
      }));
    }

    if (!regex && auth.password === auth[name]) {
      return setValidate(current => ({
        ...current,
        [name]: inputStatus.CORRECT,
      }));
    } else {
      setValidate(current => ({
        ...current,
        [name]: inputStatus.INCORRECT,
      }));
    }

    if (regex && regex.test(auth[name])) {
      return setValidate(current => ({
        ...current,
        [name]: inputStatus.CORRECT,
      }));
    }

    return setValidate(current => ({
      ...current,
      [name]: inputStatus.INCORRECT,
    }));
  }, [auth]);

  const handleClearClick = () => {
    setAuth(current => ({ ...current, [name]: "" }));
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(current => ({ ...current, [name]: target.value }));
  };

  const inValidAuth = () => validate[name] === inputStatus.INCORRECT;

  return {
    authObj: auth,
    inValidAuth,
    onClearClick: handleClearClick,
    onInputChange: handleInputChange,
  };
}
