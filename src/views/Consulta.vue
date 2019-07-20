import { stockAPI } from "../services/stockAPI";
import Axios from 'axios';

<template>
  <v-data-table
    :items="stocks"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>                     {{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.startvalue }}</td>
      <td class="text-xs-left">{{ props.item.endvalue }}</td>
      <td class="text-xs-left">{{ props.item.date }}</td>
    </template>
  </v-data-table>
</template>

<script lang="ts">

import{Vue, Component} from 'vue-property-decorator'
import axios from 'axios';

import stockAPI from '../services/stockAPI';
var stockapi = new stockAPI();

export default {

  Components: {

  },

data(){
  return{
    stocks: []
  };
},

mounted(){ 
  axios.get("http://localhost:9000/api/v1/stock/")
    .then(response => {
      this.stocks = response.data;
      console.log(response)
      }).catch(error => console.log(error))
}


}

</script>
