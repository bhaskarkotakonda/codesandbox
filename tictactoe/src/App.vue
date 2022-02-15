<template>
  <div id="app">
    <p>{{ Player }}</p>
    <button @click="resetGrid">Reset</button>
    <div id="outer_square">
      <div
        @click="updateGrid(j - 1)"
        class="square_selector"
        v-for="j in 9"
        v-bind:key="j"
      >
        {{ grid[j - 1] }}
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data() {
    return {
      Player: "Player 1",
      grid: ["", "", "", "", "", "", "", "", ""],
      count: 0,
    };
  },
  methods: {
    resetGrid() {
      this.grid = ["", "", "", "", "", "", "", "", ""];
      this.count = 0;
      this.Player = "Player 1";
    },
    updateGrid(k) {
      if (this.grid[k] !== "") return;
      if (this.count % 2 === 0) {
        this.grid[k] = "X";
        this.Player = "Player 2";
      } else {
        this.grid[k] = "O";
        this.Player = "Player 1";
      }
      this.count++;
    },
    checkSolved() {
      //[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#outer_square {
  position: relative;
  display: flex;
  flex-wrap: wrap;

  width: 50vw;
  height: 50vh;
  border: 2px solid black;
  top: 40%;
  left: 25%;
}
.square_selector {
  width: 16vw;
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  text-align: center;
}
</style>
