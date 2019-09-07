import React from 'react'
import H2 from './TalentH2Color'
import './../components//Item.css'
import Modal from 'react-modal'
import styled from 'styled-components'

const Itembox = styled.div`
    position: relative;
	  border-radius: 26px;
    background-color: #2B2B2D;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    min-height: 270px;
    width: 150px;
   outline: none;
   text-align: center;
   justify-content: center;
   padding: 16px;
   margin-right: 16px;
   margin-bottom: 16px;
${props => (props.reduce ? 'width: 70px;' : '')}
${props => (props.reduce ? 'height: 70px;' : '')}
${props => (props.reduce ? 'background-color: transparent;' : '')}
${props => (props.reduce ? 'min-height: 70px;' : '')}
${props => (props.reduce ? 'padding: 0px;' : '')}
`
const ItemImage = styled.img`
    width: 80px;
    height: 80px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    margin-bottom: 0px;
    -webkit-user-drag: none;
    text-align: center;

${props => (props.reduce ? 'width: 70px;' : '')}
${props => (props.reduce ? 'height: 70px;' : '')}
`
const ItemName = styled.h1`
    color: rgb(255, 255, 255);
	font-size: 14px;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin-top: 16px;
    width:100%;
    margin-bottom: 0px;
    ${props => (props.hidden ? 'visibility: hidden;' : '')}
`
const ItemType = styled.h2`
    font-weight: 800;
	font-size: 11px;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin-top: 3px;
    margin-bottom: 0px;
    width: 80px;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    border-radius: 6px
    ${props => (props.hidden ? 'visibility: hidden;' : '')}
`

const ItemTier = styled.h2`
	color: #ffffffcc;
	font-weight: 800;
    font-size: 11px;
    margin-top: 6px;
    margin-bottom: 6px;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    ${props => (props.hidden ? 'visibility: hidden;' : '')}
`
const ItemTag = styled.h4`
	position: relative;
    border-radius: 6px;
    color: rgb(255, 174, 52);
	font-weight: 700;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin-top: 0px;
    ${props => (props.hidden ? 'visibility: hidden;' : '')}
`
const ItemCost = styled.p`
${props => (props.hidden ? 'visibility: hidden;' : '')}
	position: absolute;
    bottom: 16px;
    width:120px;
    margin-top: 16px;
    margin-bottom: 0px;
    background: #434348d4;
    border-radius: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
	color: rgb(255, 255, 255);
	font-weight: 700;
    font-size: 14px;
    text-align: center;
    -webkit-font-smoothing: antialiased;
`

class Itemsbox extends React.Component {
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
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          className="ModalItem"
          overlayClassName="Overlay"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <div className="Cost">
            {this.props.cost && <p>{this.props.cost}</p>}
          </div>
          <div className="Imginfo">
            <img src={this.props.itemimg} alt={this.props.itemimg} />
            <div className="Info">
              <h1>{this.props.itemname}</h1>
              <H2 color={this.props.color}> {this.props.class} </H2>
              <h3>{this.props.tier}</h3>
            </div>
          </div>
          <div className="divider" />
          <div className="Text">
            <h4>{this.props.description}</h4>
            <h5>{this.props.tip}</h5>
            <h1 className="buildfromto">{this.props.builtfrom}</h1>
            <div className="ItemsRequired">
              {this.props.item1 && (
                <img src={this.props.item1} alt={this.props.item1} />
              )}
              {this.props.item2 && (
                <img src={this.props.item2} alt={this.props.item2} />
              )}
              {this.props.item3 && (
                <img src={this.props.item3} alt={this.props.item3} />
              )}
            </div>
            <h1 className="buildfromto">{this.props.buildsto}</h1>
            <div className="ItemsRequired">
              {this.props.item4 && (
                <img src={this.props.item4} alt={this.props.item4} />
              )}
              {this.props.item5 && (
                <img src={this.props.item5} alt={this.props.item5} />
              )}
              {this.props.item6 && (
                <img src={this.props.item6} alt={this.props.item6} />
              )}
              {this.props.item7 && (
                <img src={this.props.item7} alt={this.props.item7} />
              )}
              {this.props.item8 && (
                <img src={this.props.item8} alt={this.props.item8} />
              )}
              {this.props.item9 && (
                <img src={this.props.item9} alt={this.props.item9} />
              )}
            </div>
          </div>
          <button onClick={this.handleCloseModal}>CLOSE</button>
        </Modal>
        <Itembox reduce={this.props.hideNameAndRole} className="animated fadeInRight delay-0.4s" onClick={this.handleOpenModal} tabIndex="0">
          <ItemImage reduce={this.props.hideNameAndRole} src={this.props.itemimg} alt={this.props.itemimg} />
          <ItemName hidden={this.props.hideNameAndRole} >{this.props.itemname}</ItemName>
          <ItemType hidden={this.props.hideNameAndRole} style={{
            color:
              this.props.class === "DEFENSE"
                ? "#A0D46B"
                : this.props.class === "CRYSTAL"
                  ? "#4A90E2"
                  : this.props.class === "WEAPON"
                    ? "#ED5565"
                    : this.props.class === "UTILITY"
                      ? "#AC92EC"
                      : "#CCD1D9",
            background:
              this.props.class === "DEFENSE"
                ? "#a0d46b40"
                : this.props.class === "CRYSTAL"
                  ? "#4A90E240"
                  : this.props.class === "WEAPON"
                    ? "#ED556540"
                    : this.props.class === "UTILITY"
                      ? "#AC92EC40"
                      : "#CCD1D940",
          }}>{this.props.class}</ItemType>
          <ItemTier hidden={this.props.hideNameAndRole}>{this.props.tier}</ItemTier>
          {this.props.tag && (<ItemTag hidden={this.props.hideNameAndRole}>{this.props.tag}</ItemTag>
          )}
          <ItemCost hidden={this.props.hideNameAndRole}>{this.props.cost}</ItemCost>
        </Itembox>
      </div>
    )
  }
}

export default Itemsbox
