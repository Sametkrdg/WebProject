<template>
  <div>
    <Deneme v-show="pageCount === 0" />
    <NavBar v-show="pageCount === 1"/>
    <FirstComp v-show="pageCount === 2"/>
    <ThirdComp v-show="pageCount === 3"/>
    <FourthComp v-show="pageCount === 4" />
    <LastComp v-show="pageCount === 5" />
    <button id="nextButton" @click="addCounter">Sıradaki Sayfaya Geç</button>
    <button id="preButton" @click="subCounter">Önceki Sayfaya Dön</button>
  </div>
</template>

<script>
import FirstComp from "./components/first-comp.vue";
import Deneme from "./components/deneme.vue";
import NavBar from "./components/nav-bar.vue";
import ThirdComp from "./components/third-comp.vue";
import FourthComp from "./components/fourth-comp.vue";
import LastComp from "./components/last-comp.vue";
export default {
  components: {
    FirstComp,
    Deneme,
    NavBar,
    ThirdComp,
    FourthComp,
    LastComp,
  },
  data() {
    return {
      pageCount: 0, // Varsayılan değer
    };
  },
  methods: {
    addCounter() {
      this.pageCount += 1;
    },
    subCounter() {
      this.pageCount -= 1;
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-top: 20px;
}

#nextButton {
  color: white;
  background-color: darkblue;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
#preButton {
  color: white;
  background-color: darkred;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
