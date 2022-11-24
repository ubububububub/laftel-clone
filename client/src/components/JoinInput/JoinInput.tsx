import { Input } from "@/components/ui";
import { useValitdate } from "@/hooks";

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

interface JoinInputArgs {
  title: string;
  type: string;
  name: string;
  placeholder?: string;
  regex?: RegExp;
  text?: string;
}

interface JoinInputProps {
  joinInputArgs: JoinInputArgs;
  auths: Auths;
}

interface UseValidateArgs {
  authObj: JoinAuth;
  inValidAuth: () => boolean;
  onClearClick: () => void;
  onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}

export function JoinInput({ joinInputArgs, auths }: JoinInputProps) {
  const { title, type, name, placeholder, regex, text } = joinInputArgs;
  const { authObj, inValidAuth, onClearClick, onInputChange } = useValitdate({
    regex,
    name,
    auths,
  }) as UseValidateArgs;

  const inputArgs = {
    title,
    type,
    name,
    placeholder,
    text,
    authObj,
    inValidAuth,
    onClearClick,
    onInputChange,
  };

  return <Input {...{ inputArgs }} />;
}
