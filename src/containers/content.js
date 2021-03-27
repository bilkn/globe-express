import React, { useEffect } from 'react';
import 'styled-components/macro';
import { Content } from '../components';
import { CardSlider } from '../components';
import { Hero } from '../components';
import { Bookmark } from '@styled-icons/boxicons-regular/Bookmark';
import { ChevronLeft, ChevronRight } from '@styled-icons/bootstrap/';
import cardData from '../fixtures/card-slider.json';
import { detectWebP } from '../helpers/detectWebP';

export function ContentContainer(props) {
  const {
    currentCardIndex,
    setCurrentCardIndex,
    translateXValue,
    setTranslateXValue,
    isProgressAnimationPlay,
    setIsProgressAnimationPlay,
  } = props;

  const handleLeftChevronClick = () => {
    if (currentCardIndex > 0) {
      setIsProgressAnimationPlay(false);
      setCurrentCardIndex((currentCardIndex) => currentCardIndex - 1);
      setTranslateXValue((translateXValue) => (translateXValue += 270));
    }
  };
  const handleRightChevronClick = () => {
    if (currentCardIndex < cardData.length - 1) {
      setIsProgressAnimationPlay(false);
      setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
      setTranslateXValue((translateXValue) => (translateXValue -= 270));
    }
  };
  const calculateProgressBarWidth = () => {
    const denominator = (cardData.length - 1) / currentCardIndex;
    return (1 / denominator) * 100;
  };

  useEffect(() => {
    let timeout = null;
    clearTimeout(timeout);
    if (!isProgressAnimationPlay) {
      timeout = setTimeout(() => {
        setIsProgressAnimationPlay(true);
        clearTimeout(timeout);
      }, [5000]);
    }
    return () => clearTimeout(timeout);
  }, [currentCardIndex, isProgressAnimationPlay, setIsProgressAnimationPlay]);

  return (
    <Content>
      <Content.Wrapper>
        <Hero>
          <Hero.Title>{cardData[currentCardIndex].title}</Hero.Title>
          <Hero.Wrapper>
            <Hero.Subtitle>{cardData[currentCardIndex].subtitle}</Hero.Subtitle>
            <Hero.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus soluta vel, doloremque qui, ipsum blanditiis libero
              eius corporis rem eveniet excepturi necessitatibus iste.
            </Hero.Text>
            <Hero.Box>
              <Hero.Button
                hoverBg="#f7ba53d6"
                css={`
                  background: #f7ba53;
                  border-radius: 50%;
                  margin-right: 20px;
                  padding: 0.7rem;
                  @media (max-width: 64em) {
                    display: none;
                  }
                `}
                aria-label="Add bookmark"
              >
                <Bookmark size="20" />
              </Hero.Button>
              <Hero.Button
                hoverBg="#dcdcdc5e"
                css={`
                  background: none;
                  border: 1px solid white;
                `}
              >
                DISCOVER LOCATION
              </Hero.Button>
            </Hero.Box>
          </Hero.Wrapper>
        </Hero>
        <CardSlider>
          <CardSlider.Wrapper
            css={`
              transform: translateX(${translateXValue}px);
            `}
          >
            {cardData.slice(1).map((data, i) => (
              <CardSlider.Card
                first={i === 0}
                background={`${data.background}${
                  detectWebP() ? '.webp' : '.jpg'
                }`}
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
            <CardSlider.Button
              onClick={handleLeftChevronClick}
              aria-label="Previous place"
            >
              <ChevronLeft size="24px" />
            </CardSlider.Button>
            <CardSlider.Button
              onClick={handleRightChevronClick}
              css={`
                @media (max-width: 30em) {
                  margin-right: 0;
                  order: 4;
                }
              `}
              aria-label="Next place"
            >
              <ChevronRight size="24px" />
            </CardSlider.Button>

            <CardSlider.LinearProgress
              css={`
                margin-right: 25px;
                @media (max-width: 30em) {
                  display: none;
                }
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
      </Content.Wrapper>
    </Content>
  );
}
