import cancel from "@/../public/assets/svgs/cancel.svg";
import * as S from "@/components/ui/Input/styled";

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

interface InputProps {
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

export function Input({ inputArgs }: InputProps) {
  const {
    title,
    type,
    name,
    authInfo,
    onClearClick,
    onInputChange,
    placeholder,
    text,
    inValidAuth,
  } = inputArgs;

  return (
    <S.LabelContainer>
      <S.Label>{title}</S.Label>
      <S.InputContainer>
        <input
          type={type}
          placeholder={placeholder}
          value={authInfo[name]}
          onChange={onInputChange}
        />
        {authInfo[name] && (
          <S.Clear src={cancel} alt='클리어 아이콘' onClick={onClearClick} />
        )}
      </S.InputContainer>
      {inValidAuth && inValidAuth() && <S.InValidText>{text}</S.InValidText>}
    </S.LabelContainer>
  );
}
