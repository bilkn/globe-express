import styled from 'styled-components/macro';

export const Container = styled.div`
  flex-shrink: 0;
  min-width: 60%;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 65px 40px;
  overflow: hidden;
`;
export const Card = styled.div`
  background: url(${(props) => props.background}) center no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 15px 15px 50px #000;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 350px;
  justify-content: flex-end;
  margin-right: 40px;
  margin-left: -${(props)=>props.first ? props.marginLeft : 0}px;
  padding: 1.5rem;
  transition: margin-left 200ms ease;
  white-space: normal;
  width: 230px;
`;
export const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
export const Subtitle = styled.h3`
  text-transform: uppercase;
`;

export const Controls = styled.div`
  align-items: center;
  display: flex;
  padding-left: 40px;
`;

export const Box = styled.div`
  margin-right: 25px;
`;

export const Button = styled.button`
  background: none;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  padding: 20px;
`;

export const LinearProgress = styled.div`
  background: gray;
  flex-shrink: 0;
  width: 500px;
`;

export const LinearProgressBar = styled.div`
  background: #f7ba53;
  height: 4px;
  transition: width 200ms ease;
`;

export const Counter = styled.p`
  color: whitesmoke;
  font-size: 4rem;
`;
