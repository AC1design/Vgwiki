import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../components/GridList.css'
import React from 'react'
import 'animate.css/animate.min.css'
import ItemsTabGrid from './ItemsTabGrid'
import Square from './Icon/SquareIcon'
import Grid from './Icon/GridIcon'
import MobileItemsTab from './ItemsTabHorizontal'
import Page from 'react-page-loading'

const ItemsGridList = () => (
    <Tabs>
        <TabList>
            <Tab><Square></Square></Tab>
            <Tab><Grid></Grid></Tab>
        </TabList>
        <TabPanel>
            <MobileItemsTab></MobileItemsTab>
        </TabPanel>
        <TabPanel>
            <Page loader={"bar"} color={"#A9A9A9"} size={4} duration={1} >
            <ItemsTabGrid></ItemsTabGrid></Page>
        </TabPanel>
    </Tabs>
)

export default ItemsGridList