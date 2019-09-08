import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../components/GridList.css'
import React, { Component } from 'react'
import 'animate.css/animate.min.css'
import ItemsTabGrid from './ItemsTabGrid'
import Square from './Icon/SquareIcon'
import Grid from './Icon/GridIcon'
import MobileItemsTab from './ItemsTabHorizontal'

export default class ItemsGridList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Tabs
      >
        <TabList>
          <Tab>
            <Square />
          </Tab>
          <Tab>
            <Grid />
          </Tab>
        </TabList>
        <TabPanel>
          <MobileItemsTab />
        </TabPanel>
        <TabPanel>
          <ItemsTabGrid />
        </TabPanel>
      </Tabs>
    )
  }
}