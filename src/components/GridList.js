import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../components/GridList.css'
import React from 'react'
import 'animate.css/animate.min.css'
import HeroesHorizontal from './HeroesTabHorizontal';
import HeroesGrid from './HeroesTabGrid';
import Square from './Icon/SquareIcon';
import Grid from './Icon/GridIcon';

const GridList = () => (
        <Tabs>
            <TabList>
                <Tab><Square></Square></Tab>
                <Tab><Grid></Grid></Tab>
            </TabList>
            <TabPanel>
                <HeroesHorizontal></HeroesHorizontal>
            </TabPanel>
        <TabPanel>
            <HeroesGrid></HeroesGrid>
        </TabPanel>
            </Tabs>
            )

export default GridList