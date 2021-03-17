import React from 'react';
import { Content } from '../components';
import { CardSlider } from '../components';
import { Hero } from '../components';
import { Bookmark } from '@styled-icons/boxicons-regular/Bookmark';

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
          <Hero.Button>
            <Bookmark size="24"/>
          </Hero.Button>
          <Hero.Button>DISORDER LOCATION</Hero.Button>
        </Hero.Box>
      </Hero>
      <CardSlider>
        <CardSlider.Card>
          <CardSlider.Title>Japan Alpha</CardSlider.Title>
          <CardSlider.Subtitle>NAGANO PREFECTURE</CardSlider.Subtitle>
        </CardSlider.Card>
        <CardSlider.Card>
          <CardSlider.Title>Saharan Desert</CardSlider.Title>
          <CardSlider.Subtitle>MARRAKECH MERZOUGA</CardSlider.Subtitle>
        </CardSlider.Card>
        <CardSlider.Card>
          <CardSlider.Title>Sierra Nevada</CardSlider.Title>
          <CardSlider.Subtitle>YOSEMITE NATIONAL PARK</CardSlider.Subtitle>
        </CardSlider.Card>
        <CardSlider.Card>
          <CardSlider.Title>Tarife - Spain</CardSlider.Title>
          <CardSlider.Subtitle>LOS LANCES BEACH</CardSlider.Subtitle>
        </CardSlider.Card>
      </CardSlider>
    </Content>
  );
}
