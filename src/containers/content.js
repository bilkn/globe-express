import React from 'react';
import { Content } from '../components';
import { CardSlider } from '../components';
import { Hero } from '../components';
import { Bookmark } from '@styled-icons/boxicons-regular/Bookmark';
import cardData from '../fixtures/card-slider.json';

export function ContentContainer() {
  return (
    <Content>
      <Hero>
        <Hero.Title>Switzerland Alps</Hero.Title>
        <Hero.Subtitle>SAINT ANTÖNIEN</Hero.Subtitle>
        <Hero.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio fugiat
          id necessitatibus perferendis sunt nam.
        </Hero.Text>
        <Hero.Box>
          <Hero.Button
            style={{
              background: 'orange',
              borderRadius: '50%',
              marginRight: '20px',
              padding: '0.7rem',
            }}
          >
            <Bookmark size="20" style={{ color: 'white' }} />
          </Hero.Button>
          <Hero.Button>DISORDER LOCATION</Hero.Button>
        </Hero.Box>
      </Hero>
      <CardSlider>
        {cardData.map((data) => (
          <CardSlider.Card src={data.image} key={data.id}>
            <CardSlider.Title>{data.title}</CardSlider.Title>
            <CardSlider.Subtitle>{data.subtitle}</CardSlider.Subtitle>
          </CardSlider.Card>
        ))}
      </CardSlider>
    </Content>
  );
}
