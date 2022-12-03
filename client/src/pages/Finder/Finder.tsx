import checkbox from "@/../public/assets/svgs/checkbox.svg";
import checkboxreverse from "@/../public/assets/svgs/checkboxreverse.svg";
import reset from "@/../public/assets/svgs/reset.svg";
import uncheckbox from "@/../public/assets/svgs/uncheckbox.svg";
import {
  useFilter,
  useFixScroll,
  useFooterToggle,
  useNewTitle,
  useSearchBox,
} from "@/hooks";
import * as S from "@/pages/Finder/styled";
import { filterStatus } from "@/store/features/filterSlice";

const getFilterImg = (status: string): string => {
  if (status === filterStatus.READY) {
    return uncheckbox;
  } else if (status === filterStatus.CORRECT) {
    return checkbox;
  }

  return checkboxreverse;
};

export function Finder() {
  useNewTitle("다양한 필터로 보고싶은 애니 찾기 | 라프텔");
  useFooterToggle();
  useFixScroll();
  useSearchBox();
  const { filters, onUpdateReady, onUpdateCorrect, onUpdateInCorrect } =
    useFilter();

  const handleFilterClick = (id: number, status: string, type: string) => {
    if (status === filterStatus.READY) {
      return onUpdateCorrect(id, type);
    } else if (status === filterStatus.CORRECT) {
      return onUpdateInCorrect(id, type);
    }

    return onUpdateReady(id, type);
  };

  const mapedFilter = filters.map((el, index) => {
    const mapedTag = el.item.map((item, filterIndex) => {
      return (
        <S.FilterItem
          key={filterIndex}
          onClick={() => handleFilterClick(item.id, item.status, item.type)}>
          <S.FilterImg src={getFilterImg(item.status)} alt={item.status} />
          {item.title}
        </S.FilterItem>
      );
    });

    return (
      <S.FilterList key={index}>
        <S.FilterTitle>
          <h4>{el.title}</h4>
        </S.FilterTitle>
        {mapedTag}
      </S.FilterList>
    );
  });

  return (
    <S.Container>
      <S.Wrapper>
        <S.Bar>
          <S.Filter>
            <S.Title>필터</S.Title>
            <S.ResetWrapper>
              <S.Reset>
                <S.ResetText>초기화</S.ResetText>
                <S.ResetIcon src={reset} alt='필터 초기화' />
              </S.Reset>
            </S.ResetWrapper>
          </S.Filter>
          {mapedFilter}
        </S.Bar>
      </S.Wrapper>
    </S.Container>
  );
}
