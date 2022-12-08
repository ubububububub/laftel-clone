import checkbox from "@/../public/assets/svgs/checkbox.svg";
import uncheckbox from "@/../public/assets/svgs/uncheckbox.svg";
import * as S from "@/components/AgreementCheckItem/styled";

interface AgreementCheckItemProps {
  checked: {
    name: string;
    link: string;
    linkText: string;
    text: string;
    isChecked: boolean;
  }[];
  setChecked: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        link: string;
        linkText: string;
        text: string;
        isChecked: boolean;
      }[]
    >
  >;
}

export function AgreementCheckItem({
  checked,
  setChecked,
}: AgreementCheckItemProps) {
  const handleCheckChange = (name: string) => {
    setChecked(current => {
      return current.map(check => {
        if (check.name === name) {
          return { ...check, isChecked: !check.isChecked };
        }
        return check;
      });
    });
  };

  const mapedChecked = checked.map(check => {
    return (
      <S.CheckItem key={check.name}>
        <S.Check>
          <div>
            {check.linkText && (
              <S.AgreementLink href={check.link} target='_blank'>
                {check.linkText}
              </S.AgreementLink>
            )}
            {check.text}
          </div>
          <input
            type='checkbox'
            checked={check.isChecked}
            onChange={() => {
              handleCheckChange(check.name);
            }}
          />
          <S.Checkbox
            src={check.isChecked ? checkbox : uncheckbox}
            alt={check.isChecked ? "체크 아이콘" : "언체크 아이콘"}
          />
        </S.Check>
      </S.CheckItem>
    );
  });

  return <>{mapedChecked}</>;
}
