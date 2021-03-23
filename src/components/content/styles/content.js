import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 0 65px;
  padding-bottom: 50px;
  width: 100%;
  @media (max-width: 64em) {
    height: auto;
  }
  @media (max-width: 30em) {
    max-height: 600px;
    height: calc(100% - 60px);
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 64em) {
    align-items: center;
    flex-direction: column;
    height: auto !important;
    justify-content: center;

    @media (max-width: 30em) {
      height: 100% !important;
      justify-content: space-between;
    }
  }
`;
