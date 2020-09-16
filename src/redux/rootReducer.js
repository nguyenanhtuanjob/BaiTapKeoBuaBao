//Quản lý tất cả state của ứng dụng
import { combineReducers } from "redux";
import {gameKeoBuaBao} from "./GameKeoBuaBao";

export const rootReducer = combineReducers({
    //Khai báo các state của ứng dụng
    gameKeoBuaBao:gameKeoBuaBao
});