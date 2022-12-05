import styled from "styled-components";

export const Container = styled.section`
  width: 1200px;
  padding-top: 6.4rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  font-weight: 500;
  font-size: 1.3rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const Bar = styled.div`
  padding: 3.2rem 2.4rem;
  position: fixed;
  width: 264px;
  max-height: calc(100vh - 80px);
  background-color: ${({ theme: { colors } }) => colors.white};
  overflow-y: auto;
`;

export const Filter = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.filterBorder};
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.filterTitle};
`;

export const ResetWrapper = styled.div`
  margin-left: auto;
`;

export const Reset = styled.button`
  width: 60px;
  height: 24px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${({ theme: { colors } }) => colors.inputCursor};
  background: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.filterTitle};
`;

export const ResetText = styled.div`
  margin-left: 2px;
  font-size: 1rem;
  font-weight: 600;
`;

export const ResetIcon = styled.img`
  margin-left: 2px;
  width: 1.2rem;
`;

export const FilterList = styled.ul`
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  border-top: 1px solid ${({ theme: { colors } }) => colors.filterBorder};
`;

export const FilterTitle = styled.li`
  margin-bottom: 1.6rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const FilterItem = styled.li`
  margin-top: 1.2rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.gray};
`;

export const FilterImg = styled.img`
  margin-right: 0.8rem;
  width: 1.6rem;
`;

export const AnimesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  overflow: hidden;
  flex: 1 1 0%;
  padding: 3.2rem 0rem 4.8rem 4rem;
  margin-left: 264px;
  width: 963px;
  overflow-y: auto;
  max-height: 100%;
`;
