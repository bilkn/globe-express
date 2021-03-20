import styled from 'styled-components/macro';

export const Container = styled.div`
  flex-shrink: 0;
  min-width: 60%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 65px 40px;
  transition: transform 300ms 10ms;
  overflow: hidden;
`;
export const Card = styled.div`
  background: url(${(props) => props.background}) left center no-repeat;
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
  transition: box-shadow 200ms 15ms;
  white-space: normal;
  width: 230px;
`;
export const Title = styled.h2`
  font-size: 0.8rem;
  line-height: 2.5em;
`;
export const Subtitle = styled.h3`
  text-transform: uppercase;
`;

export const Controls = styled.div`
  align-items: center;
  display: flex;
  padding: 0 40px;
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
  max-width: 500px;
  width: 30vw;
`;

export const LinearProgressBar = styled.div`
  background: #f7ba53;
  height: 2px;
  transition: width 200ms ease 20ms;
`;

export const Counter = styled.p`
  color: whitesmoke;
  font-size: 4rem;
`;
