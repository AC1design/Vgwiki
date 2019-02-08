import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../components/GridList.css'
import React from 'react'
import 'animate.css/animate.min.css'
import ItemsTabGrid from './ItemsTabGrid'
import Square from './Icon/SquareIcon'
import Grid from './Icon/GridIcon'
import MobileItemsTab from './ItemsTabHorizontal'

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
            <ItemsTabGrid></ItemsTabGrid>
        </TabPanel>
    </Tabs>
)

export default ItemsGridList