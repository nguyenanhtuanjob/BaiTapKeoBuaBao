import React, { Component } from 'react'
import {connect} from 'react-redux'
class Computer extends Component {
    render() {
        const {computer} = this.props;
        let ketframe = `@keyframes randomItem${Date.now()}{
            from {top:-100px;}
            to {top:0px;}
        }`
        return (
            <div className="computer">
                <style>
                    {ketframe}
                </style>
                <div className="player-picker">
                    <img style={{position:'absolute',animation: `all randomItem${Date.now()} 0.1s` ,width: "40%"  }} src={computer.hinhAnh} alt="" />
                </div>
                <img style={{width:'80%'}} src="../img/playerComputer.png" alt=""/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        computer: state.gameKeoBuaBao.computer,
    }
}
export default connect(mapStateToProps)(Computer)
