import React from 'react'
import '../components/Skillbox.css'
import Modal from 'react-modal';
import { Player, ControlBar } from 'video-react'
import 'video-react/dist/video-react.css'
import Table from 'react-bootstrap/lib/Table';

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
            <div>    {this.props.lvl2 && 
                <Modal isOpen={this.state.showModal} className="Modal" overlayClassName="Overlay" onRequestClose={this.handleCloseModal} shouldCloseOnOverlayClick={true}>
                {this.props.video && <Player className="player" autoPlay="true" isFullscreen="false" loop controls="true">
                        <ControlBar disableCompletely={true} />
                        <source src={this.props.video} />
                    </Player>}
                    <Table className="Tableclass">
                        <thead >
                            <tr>
                                <th></th>
                                {this.props.lvl1 && <th>{this.props.lvl1}</th>}
                                {this.props.lvl2 && <th>{this.props.lvl2}</th>}
                                {this.props.lvl3 && <th>{this.props.lvl3}</th>}
                                {this.props.lvl4 && <th>{this.props.lvl4}</th>}
                                {this.props.lvl5 && <th>{this.props.lvl5}</th>}
                                {this.props.lvl6 && <th>{this.props.lvl6}</th>}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='striped'>
                                {this.props.stats1 && <td>{this.props.stats1}</td>}
                                {this.props.row11 && <th>{this.props.row11}</th>}
                                {this.props.row12 && <th>{this.props.row12}</th>}
                                {this.props.row13 && <th>{this.props.row13}</th>}
                                {this.props.row14 && <th>{this.props.row14}</th>}
                                {this.props.row15 && <th>{this.props.row15}</th>}
                                {this.props.row16 && <th>{this.props.row16}</th>}
                            </tr>
                            <tr>
                                {this.props.stats2 && <td>{this.props.stats2}</td>}
                                {this.props.row21 && <th>{this.props.row21}</th>}
                                {this.props.row22 && <th>{this.props.row22}</th>}
                                {this.props.row23 && <th>{this.props.row23}</th>}
                                {this.props.row24 && <th>{this.props.row24}</th>}
                                {this.props.row25 && <th>{this.props.row25}</th>}
                                {this.props.row26 && <th>{this.props.row26}</th>}
                            </tr>
                            <tr className='striped'>
                                {this.props.stats3 && <td>{this.props.stats3}</td>}
                                {this.props.row31 && <th>{this.props.row31}</th>}
                                {this.props.row32 && <th>{this.props.row32}</th>}
                                {this.props.row33 && <th>{this.props.row33}</th>}
                                {this.props.row34 && <th>{this.props.row34}</th>}
                                {this.props.row35 && <th>{this.props.row35}</th>}
                                {this.props.row36 && <th>{this.props.row36}</th>}
                            </tr>
                            <tr>
                                {this.props.stats4 && <td>{this.props.stats4}</td>}
                                {this.props.row41 && <th>{this.props.row41}</th>}
                                {this.props.row42 && <th>{this.props.row42}</th>}
                                {this.props.row43 && <th>{this.props.row43}</th>}
                                {this.props.row44 && <th>{this.props.row44}</th>}
                                {this.props.row45 && <th>{this.props.row45}</th>}
                                {this.props.row46 && <th>{this.props.row46}</th>}
                            </tr>
                            <tr className='striped'>
                                {this.props.stats5 && <td>{this.props.stats5}</td>}
                                {this.props.row51 && <th>{this.props.row51}</th>}
                                {this.props.row52 && <th>{this.props.row52}</th>}
                                {this.props.row53 && <th>{this.props.row53}</th>}
                                {this.props.row54 && <th>{this.props.row54}</th>}
                                {this.props.row55 && <th>{this.props.row55}</th>}
                                {this.props.row56 && <th>{this.props.row56}</th>}
                            </tr>
                        </tbody>
                    </Table>
                    <button onClick={this.handleCloseModal}>CLOSE</button>
                </Modal>}
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

export default Skillbox;