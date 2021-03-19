import React, { useState } from 'react';
import { Content } from '../components';
import { CardSlider } from '../components';
import { Hero } from '../components';
import { Bookmark } from '@styled-icons/boxicons-regular/Bookmark';
import { ChevronLeft, ChevronRight } from '@styled-icons/bootstrap/';
import cardData from '../fixtures/card-slider.json';
import 'styled-components/macro';

export function ContentContainer() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);

  const handleLeftChevronClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((currentCardIndex) => currentCardIndex - 1);
      setMarginLeft((marginLeft) => marginLeft - 270);
    }
  };
  const handleRightChevronClick = () => {
    if (currentCardIndex < cardData.length - 1) {
      setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
      setMarginLeft((marginLeft) => marginLeft + 270);
    }
  };
  const calculateProgressBarWidth = () => {
    const denominator = (cardData.length - 1) / currentCardIndex;
    return (1 / denominator) * 100;
  };
  return (
    <Content>
      <Hero>
        <Hero.Title>{cardData[currentCardIndex].title}</Hero.Title>
        <Hero.Subtitle>{cardData[currentCardIndex].subtitle}</Hero.Subtitle>
        <Hero.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio fugiat
          id necessitatibus perferendis sunt nam.
        </Hero.Text>
        <Hero.Box>
          <Hero.Button
            css={`
              background: #f7ba53;
              border-radius: 50%;
              margin-right: 20px;
              padding: 0.7rem;
            `}
          >
            <Bookmark size="20" />
          </Hero.Button>
          <Hero.Button
            css={`
              background: none;
              border: 1px solid white;
            `}
          >
            DISCOVER LOCATION
          </Hero.Button>
        </Hero.Box>
      </Hero>
      <CardSlider>
        <CardSlider.Wrapper>
          {cardData.map((data, i) => (
            <CardSlider.Card
              marginLeft={marginLeft}
              first={i === 0}
              background={data.image}
              key={data.id}
              css={`
                box-shadow: ${currentCardIndex >= 1 &&
                i + 1 === currentCardIndex
                  ? 'none'
                  : '15px 15px 50px #000'};
              `}
            >
              <CardSlider.Title>{data.title}</CardSlider.Title>
              <CardSlider.Subtitle>{data.subtitle}</CardSlider.Subtitle>
            </CardSlider.Card>
          ))}
        </CardSlider.Wrapper>
        <CardSlider.Controls>
          <CardSlider.Box>
            <CardSlider.Button
              onClick={handleLeftChevronClick}
              css={`
                margin-right: 25px;
              `}
            >
              <ChevronLeft size="24px" />
            </CardSlider.Button>
            <CardSlider.Button onClick={handleRightChevronClick}>
              <ChevronRight size="24px" />
            </CardSlider.Button>
          </CardSlider.Box>
          <CardSlider.LinearProgress
            css={`
              margin-right: 25px;
            `}
          >
            <CardSlider.LinearProgressBar
              css={`
                width: ${currentCardIndex === 0
                  ? 0
                  : calculateProgressBarWidth()}%;
              `}
            />
          </CardSlider.LinearProgress>
          <CardSlider.Counter>0{currentCardIndex + 1}</CardSlider.Counter>
        </CardSlider.Controls>
      </CardSlider>
    </Content>
  );
}
