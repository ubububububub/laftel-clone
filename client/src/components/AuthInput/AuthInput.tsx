import { Input } from "@/components/ui";
import { useValitdate } from "@/hooks";

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
  setAuth: React.Dispatch<React.SetStateAction<JoinAuth | LoginAuth>>;
  setValidate: React.Dispatch<
    React.SetStateAction<JoinValidate | LoginValidate>
  >;
}

interface AuthInputArgs {
  title: string;
  type: string;
  name: string;
  placeholder?: string;
  regex?: RegExp;
  text?: string;
}

interface AuthInputProps {
  authInputArgs: AuthInputArgs;
  auths: Auths;
}

interface UseValidate {
  authInfo: JoinAuthIndex | LoginAuthIndex;
  inValidAuth: () => boolean;
  onClearClick: () => void;
  onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AuthInput({ authInputArgs, auths }: AuthInputProps) {
  const { title, type, name, placeholder, regex, text } = authInputArgs;
  const { authInfo, inValidAuth, onClearClick, onInputChange } = useValitdate({
    regex,
    name,
    auths,
  }) as UseValidate;

  const inputArgs = {
    title,
    type,
    name,
    placeholder,
    text,
    authInfo,
    inValidAuth,
    onClearClick,
    onInputChange,
  };

  return <Input {...{ inputArgs }} />;
}
