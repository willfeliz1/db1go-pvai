import axios from 'axios';
import { getConstantValue } from 'typescript';

export default class stockAPI{
   
    constructor(){

    }
    getStocks(){
      
        const url = 'http://localhost:9000/api/v1/stock/';
        axios.get(url).then(response => response.data);
    }
}