<template>
  <v-card>
    <v-card-text>
      <v-text-field v-model="name" label="Name"></v-text-field>
    </v-card-text>
    <v-card-text>
      <v-text-field v-model="data" label="Date" mask="####-##-##" return-masked-value></v-text-field>
    </v-card-text>
    <v-card-text>
      <v-text-field v-model="startvalue" label="Start Value"></v-text-field>
    </v-card-text>
    <v-card-text>
      <v-text-field v-model="endvalue" label="End Value"></v-text-field>
    </v-card-text>

    <v-btn color="info" @click="validate">Save</v-btn>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Axios from "axios";

export default {
  data() {
    return {
      name: "",
      data: "",
      startvalue: "",
      endvalue: ""
    };
  },
  methods: {
    validate() {
      Axios.post("http://localhost:9000/api/v1/stock/", {
        name: this.name,
        value: {
          start: this.startvalue,
          end: this.endvalue
        },
        date: this.data
      })
        .then(function(response) {
          console.log("ok");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
