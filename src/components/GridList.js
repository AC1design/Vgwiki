import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../components/GridList.css'
import React, { Component } from 'react'
import 'animate.css/animate.min.css'
import HeroesHorizontal from './HeroesTabHorizontal'
import HeroesGrid from './HeroesTabGrid'
import Square from './Icon/SquareIcon'
import Grid from './Icon/GridIcon'

class GridList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabIndex: localStorage.getItem('tabIndex') || 0,
    }
  }

  selectTab(index) {
    // update localStorage
    localStorage.setItem('tabIndex', index)
    // Update the state
    return this.setState({ tabIndex: index })
  }

  render() {
    return (
      <Tabs
        defaultIndex={parseInt(this.state.tabIndex, 10)}
        onSelect={tabIndex => this.selectTab(tabIndex)}
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
          <HeroesHorizontal />
        </TabPanel>
        <TabPanel>
          <HeroesGrid />
        </TabPanel>
      </Tabs>
    )
  }
}

export default GridList
