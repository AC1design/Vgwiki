import React from 'react'
import '../components/Skillbox.css'
import Modal from 'react-modal';
import { Player, ControlBar } from 'video-react'
import 'video-react/dist/video-react.css'
import { Table} from 'react-bootstrap';
import PropTypes from 'prop-types';
import H2 from './TalentH2Color'



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
                <Table striped bordered hover className='Tableclass'>
                        <thead >
                            <tr>
                                <th></th>
                                {this.props.lvl1 && <th>{this.props.lvl1}</th>}
                                {this.props.lvl2 && <th>{this.props.lvl2}</th>}
                                {this.props.lvl3 && <th>{this.props.lvl3}</th>}
                                {this.props.lvl4 && <th>{this.props.lvl4}</th>}
                                {this.props.lvl5 && <th>{this.props.lvl5}</th>}
                            {this.props.cp && <th><H2 color={this.props.color} style={{fontSize:'12px'}}> {this.props.cp} </H2></th>}
                            {this.props.wp && <th><H2 color={this.props.color2} style={{ fontSize: '12px' }}> {this.props.wp} </H2></th>}
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
                            {this.props.row16 && <th><H2 color={this.props.color} style={{ fontSize: '12px' }}> {this.props.row16} </H2></th>}
                            {this.props.row17 && <th><H2 color={this.props.color2} style={{ fontSize: '12px' }}> {this.props.row17} </H2></th>}
                            </tr>
                            <tr>
                                {this.props.stats2 && <td>{this.props.stats2}</td>}
                                {this.props.row21 && <th>{this.props.row21}</th>}
                                {this.props.row22 && <th>{this.props.row22}</th>}
                                {this.props.row23 && <th>{this.props.row23}</th>}
                                {this.props.row24 && <th>{this.props.row24}</th>}
                                {this.props.row25 && <th>{this.props.row25}</th>}
                            {this.props.row26 && <th><H2 color={this.props.color} style={{ fontSize: '12px' }}> {this.props.row26} </H2></th>}
                            {this.props.row27 && <th><H2 color={this.props.color2} style={{ fontSize: '12px' }}> {this.props.row27} </H2></th>}
                            </tr>
                        <tr className='striped'>
                                {this.props.stats3 && <td>{this.props.stats3}</td>}
                                {this.props.row31 && <th>{this.props.row31}</th>}
                                {this.props.row32 && <th>{this.props.row32}</th>}
                                {this.props.row33 && <th>{this.props.row33}</th>}
                            {this.props.row34 && <th>{this.props.row34}</th>}
                                {this.props.row35 && <th>{this.props.row35}</th>}
                            {this.props.row36 && <th><H2 color={this.props.color} style={{ fontSize: '12px' }}> {this.props.row36} </H2></th>}
                            {this.props.row37 && <th><H2 color={this.props.color2} style={{ fontSize: '12px' }}> {this.props.row37} </H2></th>}
                            </tr>
                            <tr>
                                {this.props.stats4 && <td>{this.props.stats4}</td>}
                                {this.props.row41 && <th>{this.props.row41}</th>}
                                {this.props.row42 && <th>{this.props.row42}</th>}
                                {this.props.row43 && <th>{this.props.row43}</th>}
                                {this.props.row44 && <th>{this.props.row44}</th>}
                                {this.props.row45 && <th>{this.props.row45}</th>}
                            {this.props.row46 && <th><H2 color={this.props.color} style={{ fontSize: '12px' }}> {this.props.row46} </H2></th>}
                            {this.props.row47 && <th><H2 color={this.props.color2} style={{ fontSize: '12px' }}> {this.props.row47} </H2></th>}
                            </tr>
                        <tr className='striped'>
                                {this.props.stats5 && <td>{this.props.stats5}</td>}
                                {this.props.row51 && <th>{this.props.row51}</th>}
                                {this.props.row52 && <th>{this.props.row52}</th>}
                                {this.props.row53 && <th>{this.props.row53}</th>}
                                {this.props.row54 && <th>{this.props.row54}</th>}
                                {this.props.row55 && <th>{this.props.row55}</th>}
                            {this.props.row56 && <th><H2 color={this.props.color} style={{ fontSize: '12px' }}> {this.props.row56} </H2></th>}
                            {this.props.row57 && <th><H2 color={this.props.color2} style={{ fontSize: '12px' }}> {this.props.row57} </H2></th>}
                            </tr>
                        <tr>
                            {this.props.stats6 && <td>{this.props.stats6}</td>}
                            {this.props.row61 && <th>{this.props.row61}</th>}
                            {this.props.row62 && <th>{this.props.row62}</th>}
                            {this.props.row63 && <th>{this.props.row63}</th>}
                            {this.props.row64 && <th>{this.props.row64}</th>}
                            {this.props.row65 && <th>{this.props.row65}</th>}
                            {this.props.row66 && <th><H2 color={this.props.color} style={{ fontSize: '12px' }}> {this.props.row66} </H2></th>}
                            {this.props.row67 && <th><H2 color={this.props.color2} style={{ fontSize: '12px' }}> {this.props.row67} </H2></th>}
                        </tr>
                        <tr className='striped'>
                            {this.props.stats7 && <td>{this.props.stats7}</td>}
                            {this.props.row71 && <th>{this.props.row71}</th>}
                            {this.props.row72 && <th>{this.props.row72}</th>}
                            {this.props.row73 && <th>{this.props.row73}</th>}
                            {this.props.row74 && <th>{this.props.row74}</th>}
                            {this.props.row75 && <th>{this.props.row75}</th>}
                            {this.props.row76 && <th><H2 color={this.props.color} style={{ fontSize: '12px' }}> {this.props.row76} </H2></th>}
                            {this.props.row77 && <th><H2 color={this.props.color2} style={{ fontSize: '12px' }}> {this.props.row77} </H2></th>}
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

Table.propTypes = {
    striped: PropTypes.bool,
};

export default Skillbox;