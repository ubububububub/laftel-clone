import { useEffect } from "react";

import { UseValidateArgs } from "@/types/auth";

const inputStatus = {
  READY: "ready",
  CORRECT: "correct",
  INCORRECT: "incorrect",
};

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
    setAuth(current => ({
      ...current,
      [name]: target.value,
    }));
  };

  const inValidAuth = () => validate[name] === inputStatus.INCORRECT;

  return {
    authInfo: auth,
    inValidAuth,
    onClearClick: handleClearClick,
    onInputChange: handleInputChange,
  };
}
