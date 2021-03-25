import styled from 'styled-components/macro';

export const Container = styled.main`
  align-items: center;
  display: flex;
  height: calc(100% - 110px); // 76px is sum of header and footer height.
  position: relative;
  z-index: 1;
`;
