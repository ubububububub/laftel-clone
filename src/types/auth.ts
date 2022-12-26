export interface PostJoin {
  email: string;
  password: string;
  isLaftel: boolean;
  isInfo: boolean;
  isEvent: boolean;
}

export interface PostLogin {
  email: string;
  password: string;
}

export interface DecodedAccessToken {
  email: string;
}

export type useEmailArgs = PostJoin;

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
  setAuth: React.Dispatch<React.SetStateAction<JoinAuth | LoginAuth | any>>;
  setValidate: React.Dispatch<
    React.SetStateAction<JoinValidate | LoginValidate | any>
  >;
}

interface AuthInputArgs {
  title: string;
  type: string;
  name: string;
  placeholder: string;
  regex?: RegExp;
  text: string;
}

export interface AuthInputProps {
  authInputArgs: AuthInputArgs;
  auths: Auths;
}

export interface UseValidate {
  authInfo: JoinAuthIndex | LoginAuthIndex;
  inValidAuth: () => boolean;
  onClearClick: () => void;
  onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SocialLoginLinkProps {
  icon: string;
  name: string;
  href?: string;
}

interface AuthValidates {
  auth: JoinAuthIndex | LoginAuthIndex;
  validate: JoinValidateIndex | LoginValidateIndex;
  setAuth: React.Dispatch<React.SetStateAction<JoinAuth | LoginAuth>>;
  setValidate: React.Dispatch<
    React.SetStateAction<JoinValidate | LoginValidate>
  >;
}

export interface UseValidateArgs {
  regex?: RegExp;
  name: string;
  auths: AuthValidates;
}
