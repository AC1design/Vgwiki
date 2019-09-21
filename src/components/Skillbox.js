import React from 'react'
import '../components/Skillbox.css'
import Modal from 'react-modal'
import { Player, ControlBar } from 'video-react'
import 'video-react/dist/video-react.css'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import H2 from './TalentH2Color'
import 'animate.css/animate.min.css'
import Truncate from 'react-truncate';

class Skillbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }
  render() {
    const isPerkAbility = this.props.subtitle === 'Perk'
    const isULTIMATE = this.props.subtitle === 'ULTIMATE'
    const cpRatio = this.props.stats.find(s => s.cr)
      ? this.props.stats.find(s => s.cr).cr
      : null
    const wpRatio = this.props.stats.find(s => s.wr)
      ? this.props.stats.find(s => s.wr).wr
      : null
    return (
      <div>
        {' '}
          <Modal
            isOpen={this.state.showModal}
          className="Modal"
            overlayClassName="Overlay"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
          >
            {this.props.video && (
              <Player
                className="player"
                autoPlay={true}
                isFullscreen="false"
                loop
                controls="true"
                muted
              >
                <ControlBar disableCompletely={true} />
                <source
                  src={
                    this.props.video
                      ? this.props.video.startsWith('https')
                        ? this.props.video
                        : require(`./../images/SkillVideos/${
                            this.props.video
                          }.mp4`)
                      : null
                  }
                />
              </Player>
            )}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'left',
              marginLeft: '16px',
              marginTop: '16px',
              alignSelf: 'flex-start',
            alignItems: 'center',
            }}>
              <img
                src={require(`./../images/Ability/${this.props.image}.png`)}
                alt={this.props.title}
              />
              <div style={{textAlign: 'left'}}>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
              </div>
            </div>
            <p> {this.props.text.join('\n')}</p>
            <Table className="Tableclass">
              <thead>
                <tr>
                  {!isPerkAbility && <th> LVL</th>}
                  {!isPerkAbility && <th> 1</th>}
                  {!isPerkAbility && <th> 2</th>}
                  {!isPerkAbility && <th> 3</th>}
                  {!isULTIMATE && !isPerkAbility && <th> 4</th>}
                  {!isULTIMATE && !isPerkAbility && <th> 5</th>}
                  {cpRatio && (
                    <th>
                      <H2 color="#38EEFF" style={{ fontSize: '12px' }}>
                        CP%
                      </H2>
                    </th>
                  )}
                  {wpRatio && (
                    <th>
                      <H2 color="red" style={{ fontSize: '12px' }}>
                        WP%
                      </H2>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {this.props.stats.map((stat, index) => (
                  <tr className={index % 2 === 0 ? 'striped' : ''} key={index}>
                    <td>{stat.name}</td>
                    {stat.amount.map((value, idx) => (
                      <th key={idx}>{value}</th>
                    ))}
                    {stat.cr ? (
                      <th>
                        <H2 color="#38EEFF" style={{ fontSize: '12px' }}>
                          {' '}
                          {stat.cr}{' '}
                        </H2>
                      </th>
                    ) : null}
                    {stat.wr ? (
                      <th>
                        <H2 color="red" style={{ fontSize: '12px' }}>
                          {' '}
                          {stat.wr}{' '}
                        </H2>
                      </th>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </Table>
            <button onClick={this.handleCloseModal}>X</button>
          </Modal>
        <div className="Skillbox" tabIndex="0">
          <div style={{
            display: 'flex',
            alignItems: 'center',}}>
          <img
            src={require(`./../images/Ability/${this.props.image}.png`)}
            alt={this.props.title}
            />
            <div style ={{marginLeft: '16px'}}>
          <h1>{this.props.title}</h1>
              <h2>{this.props.subtitle}</h2>
            </div>
          </div>
         
            <p> <Truncate className='Skillboxp' lines={6} ellipsis={<span>...</span>}>{this.props.text.join('\n')}</Truncate></p>
          
          <button onClick={this.handleOpenModal} className='Skillboxbutton'>READ MORE</button>
        </div>
      </div>
    )
  }
}

Table.propTypes = {
  striped: PropTypes.bool,
}

export default Skillbox
