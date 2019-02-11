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
      chosenTab: 'square',
    }
  }

  selectTab(tab) {
    // update react state
    this.setState({ chosenTab: tab })

    // update localStorage
    localStorage.setItem('chosenTab', tab)
  }

  hydrateStateWithLocalStorage() {
    console.log('hydare', localStorage.getItem('chosenTab'))
    // Update state from what was saved in local storage
    this.setState({ chosenTab: localStorage.getItem('chosenTab') || 'square' })
  }

  componentDidMount() {
    // When this loads use the locally stored values
    this.hydrateStateWithLocalStorage()
  }

  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>
            <Square onClick={this.selectTab('square')} />
          </Tab>
          <Tab>
            <Grid onClick={this.selectTab('grid')} />
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
