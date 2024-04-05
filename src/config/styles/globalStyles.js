import styled from "@emotion/styled";

export const clearfix = `
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  ${clearfix};
  width: 100%;
  @media (min-width: 1025px) {
    max-width: 1025px;
    padding: 0 1.2rem;
  }
`

export const Row = styled.div`
  margin-left: 0;
  margin-right: 0;
  @media (min-width: 1025px) {
    margin-left: -12px;
    margin-right: -12px;
  }
`