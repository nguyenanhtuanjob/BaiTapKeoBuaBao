const stateDefault ={
    banChon:true,
    soBanThang:0,
    soBanChoi:0,
    ketQua: "Ironman win",
    
    mangKeoBuaBaoChon:[
        {ma:'keo', hinhAnh:'./img/keo.png',banChon:true},
        {ma:'bua', hinhAnh:'./img/bua.png',banChon:false},
        {ma:'bao', hinhAnh:'./img/bao.png',banChon:false},
    ],
    computer:{ma:'bua', hinhAnh:'./img/bua.png',banChon:false}
}

export const gameKeoBuaBao =(state = stateDefault,action)=>{

    switch (action.type) {
        case 'DAT_CUOC_KEO_BUA_BAO':{
            
            let mangDatCuocCapNhat = [...state.mangKeoBuaBaoChon];
            mangDatCuocCapNhat = mangDatCuocCapNhat.map((item,index)=>{
                 return{ ...item,banChon: false}
            })
            let index = mangDatCuocCapNhat.findIndex(datCuoc=> datCuoc.ma ===action.ketQuaChon);
            if(index !== -1){
                mangDatCuocCapNhat[index].banChon =true;
            }
            state.mangKeoBuaBaoChon = mangDatCuocCapNhat;
            return { ...state};
        }
        case 'PLAY_GAME_KEO_BUA_BAO':{
            console.log(action);
            let soNgauNhien = Math.floor(Math.random()*3);
            let KeoBuaBaoNgauNhien = state.mangKeoBuaBaoChon[soNgauNhien];
            state.computer = {...KeoBuaBaoNgauNhien};
            return { ...state};
        }
        case 'END_GAME':{
            //số bàn chơi
            state.soBanChoi += 1;
            let player = state.mangKeoBuaBaoChon.find(item => item.banChon ===true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':{
                    if(computer.ma ==='keo'){
                        state.ketQua = 'Hoà nhé!!!';
                    } else if(computer.ma === 'bua'){
                        state.ketQua = 'Thua sml nhé!!';
                    }else{
                        state.soBanThang++;
                        state.ketQua = 'Thắng rồi haha';
                    }
                    break;
                }
                case 'bua':{
                    if(computer.ma ==='keo'){
                        state.soBanThang++;
                        state.ketQua = 'Thắng rồi haha';
                    } else if(computer.ma === 'bua'){
                        state.ketQua = 'Hoà nhé!!!';
                    }else{
                        state.ketQua = 'Thua sml nhé!!';
                    }
                    break;
                }
                case 'bao':{
                    if(computer.ma ==='keo'){
                        state.ketQua = 'Thua sml nhé!!';
                    } else if(computer.ma === 'bua'){
                        state.soBanThang++;
                        state.ketQua = 'Thắng rồi haha';
                    }else{
                        state.ketQua = 'Hoà nhé!!!';
                    }
                    break;
                }
            
                default:
                    state.ketQua = "I'm ironman,i love you 3000!!!"
                    break;
            }
            
            return { ...state };
        }
        default:
            return { ...state };
    }
    
}