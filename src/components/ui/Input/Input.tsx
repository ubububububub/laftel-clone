import cancel from "@/../public/assets/svgs/cancel.svg";
import * as S from "@/components/ui/Input/styled";
import { InputProps } from "@/types/input";

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
