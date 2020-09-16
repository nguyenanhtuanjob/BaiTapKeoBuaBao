import React, { Component } from 'react'
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import Player from './Player';
import './styleGame/BaiTapKeoBuaBao.css';
export default class BaiTapKeoBuaBao extends Component {
    render() {
        return (
            <div className="gameKeoBuaBao">
                <div className ="container-fluid">
                    <div className="row my-5 pt-5">
                        <div className="col-4">
                            <Player/>
                        </div>
                        <div className="col-4">
                            <KetQuaTroChoi/>
                        </div>
                        <div className="col-4">
                            <Computer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
