import React from 'react'
import '../components/Skillbox.css'
import Modal from 'react-modal';
import { Player, ControlBar } from 'video-react'
import '/Users/angelocantone/Documents/vgprowiki/node_modules/video-react/dist/video-react.css'

class Skillbox extends React.Component {
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
                    <Player className="player" autoPlay="true" isFullscreen="false" loop controls="true">
                        <ControlBar disableCompletely={true} />
                        <source src={this.props.video} />
                    </Player>
                    <button onClick={this.handleCloseModal}>CLOSE</button>
                </Modal>
                <div className="Skillbox" onClick={this.handleOpenModal} tabindex='0'>
                    <img src={this.props.image} />
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                    <p>{this.props.text}</p>
                </div>
            </div >
        );
    }
}

export default Skillbox