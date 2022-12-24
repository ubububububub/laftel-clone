import { Input } from "@/components/ui";
import { useValitdate } from "@/hooks";
import { AuthInputProps, UseValidate } from "@/types/auth";

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
