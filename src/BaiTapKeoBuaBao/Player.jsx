import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  renderKeoBuaBao = () => {
    const { mangKeoBuaBaoChon } = this.props;
    return mangKeoBuaBaoChon.map((keoBuaBao, index) => {
      let border ={};
        if(keoBuaBao.banChon){
         border = {border: "2px solid yellow"}
        }
      return(
        <div className="col-4" key={index}>
          <button style={border} onClick={()=>{
            this.props.datCuocKeoBuaBao(keoBuaBao.ma)
          }}>
          <img
          style={{
            width: "50%",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          src={keoBuaBao.hinhAnh}
          alt={keoBuaBao.ma}
        />
          </button>
        
      </div>
      )
    });
  };
  render() {
    return (
      <div>
        <div className="player pr-5">
          <div className="player-picker">
            <img
              style={{
                width: "40%"
              }}
              src={this.props.mangKeoBuaBaoChon.find(item => item.banChon ===true).hinhAnh}
              alt=""
            />
          </div>
          <img style={{ width: "80%" }} src="../img/player.png" alt="" />
          <div className="row">{this.renderKeoBuaBao()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangKeoBuaBaoChon: state.gameKeoBuaBao.mangKeoBuaBaoChon,
    banChon: state.gameKeoBuaBao.banChon,
  };
};
const mapDispatchToProps = (dispatch) =>{
  return{ 
    datCuocKeoBuaBao:(ketQuaChon)=>{
      console.log(ketQuaChon);
      dispatch({ 
        type:'DAT_CUOC_KEO_BUA_BAO',
        ketQuaChon
    })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);
