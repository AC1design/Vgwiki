import React from 'react'
import H2 from './TalentH2Color'
import './../components//Item.css'
import Modal from 'react-modal';

class Itemsbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}
	render() {
		return (
			<div>
				<Modal isOpen={this.state.showModal} className="Modal" overlayClassName="Overlay" onRequestClose={this.handleCloseModal} shouldCloseOnOverlayClick={true}>
					<div className="Cost">
						<p>{this.props.cost}</p>
					</div>
					<div className="Imginfo">
					<img src={this.props.itemimg} />
						<div className="Info">
					<h1>{this.props.itemname}</h1>
					<H2 color={this.props.color}> {this.props.class} </H2>
					<h3>{this.props.tier}</h3>
						</div>
					</div>
					<div className="divider"></div>
					<h4>{this.props.description}</h4>
					<h1 className="ItemsRequiredTitle">ITEMS REQUIRED</h1>
					<div className="ItemsRequired">
					<img src={this.props.item1}/>
						<img src={this.props.item2} />
						<img src={this.props.item3} />
					</div>
					<button onClick={this.handleCloseModal}>CLOSE</button>
				</Modal>
				<div className="Itembox" onClick={this.handleOpenModal} tabindex='0'>
					<div className="ImageCost">
						<img src={this.props.itemimg} />
						<div className="Cost">
							<p>{this.props.cost}</p>
						</div>
					</div>
					<H2 color={this.props.color}> {this.props.class} </H2>
					<h3>{this.props.tier}</h3>
					<h1>{this.props.itemname}</h1>
					<div className="Tag">
						<h4>{this.props.tag}</h4>
					</div>
				</div>
			</div>
		)
	}
}

		
		
		
export default Itemsbox