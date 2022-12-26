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

export interface InputProps {
  inputArgs: {
    title: string;
    type: string;
    name: string;
    authInfo: JoinAuth | LoginAuth;
    onClearClick: () => void;
    onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    text?: string;
    inValidAuth?: () => boolean;
  };
}
