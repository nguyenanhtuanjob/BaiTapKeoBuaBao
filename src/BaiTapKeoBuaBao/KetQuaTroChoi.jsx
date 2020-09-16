import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    const { ketQua, soBanThang, soBanChoi } = this.props;

    return (
      <div style={{ fontSize: "40px", color: "green" }}>
        <div className=" text-center">
          <span className="text-center text-warning">{ketQua}</span>
        </div>
        <div className=" text-center">
          Số Bàn Thắng: <span className="text-center">{soBanThang}</span>
        </div>
        <div className=" text-center">
          Số Bàn Chơi: <span className="text-center">{soBanChoi}</span>
        </div>
        <div className="mt-5 text-center">
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.playGame();
            }}
          >
            PLAY GAME
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.gameKeoBuaBao.ketQua,
    soBanThang: state.gameKeoBuaBao.soBanThang,
    soBanChoi: state.gameKeoBuaBao.soBanChoi,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        let soNgauNhien = Math.floor(Math.random() * 3);
        dispatch({
          type: "PLAY_GAME_KEO_BUA_BAO",
          soNgauNhien,
        });
        count++;
        // console.log(count);
        if (count >= 10) {
          //dừng hàm setInterval
          clearInterval(randomComputerItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
    // playGame: ()=>{
    //     dispatch({
    //                 type: 'PLAY_GAME_KEO_BUA_BAO',
    //                 soNgauNhien
    //     }),
    //     dispatch({
    //         type: 'END_GAME'
    //     })
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
