import styled from "styled-components";

export const EpisodeContainer = styled.div`
  margin-top: 2.4rem;
`;

export const EpisodeHeader = styled.header`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  min-height: 4rem;
`;

export const AnimeTitle = styled.h2`
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-break: break-all;
  overflow-wrap: break-word;
  overflow: hidden;
`;

export const EpisodeItem = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  cursor: pointer;
`;

export const EpisodeList = styled.ul`
  padding: 0px;
  margin: 2.4rem 0px;

  ${EpisodeItem} + ${EpisodeItem} {
    margin-top: 1.6rem;
  }
`;

export const Episode = styled.div`
  flex: 1 1 0%;
  display: flex;
`;

export const EpisodeImgContainer = styled.div`
  position: relative;
  display: block;
  width: 16rem;
  height: 11.1rem;
  border-radius: 0.4rem;
  background: ${({ theme: { colors } }) => colors.membership};
  overflow: hidden;
  margin-right: 1.6rem;
  flex-shrink: 0;
`;

export const EpisodeImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border: none;
`;

export const EpisodeDesc = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const EpisodeTitleContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const EpisodeTitle = styled.h3`
  margin: 0px 0px 0.2rem;
  font-size: 1.8rem;
  font-weight: bold;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
`;

export const EpisodeDate = styled.span`
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.lightGray};
`;
