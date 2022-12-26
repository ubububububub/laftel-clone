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

export const EpisodeList = styled.ul`
  padding: 0px;
  margin: 2.4rem 0px;

  a + a {
    margin-top: 1.6rem;
  }
`;
