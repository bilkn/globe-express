import styled from 'styled-components/macro';



export const Container = styled.div`
  flex-shrink: 0;
  min-width: 60%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 65px 40px;
  transition: transform 300ms;
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
  padding: 1.5rem;
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
  transition: background 200ms ease;
  outline: none;
  &:hover {
    background: #dcdcdc5e;
  }
`;

export const LinearProgress = styled.div`
  background: #ffffffa8;
  flex-shrink: 0;
  width: 45%;
`;

export const LinearProgressBar = styled.div`
  background: #f7ba53;
  height: 2px;
  transition: width 200ms ease;
`;

export const Counter = styled.p`
  color: whitesmoke;
  font-size: 4rem;
`;
