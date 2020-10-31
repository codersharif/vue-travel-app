<template>
  <div id="app">
    <TheNavigation />
    <transition name="slide" mode="out-in">
    <router-view :key="$route.path"/>
    </transition>
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation"
export default {
  components:{
    TheNavigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.input{
  border: 1px solid green;
  margin-bottom: 20px;
  padding: 10px;
}
.btn{
  background: green;
  color: white;
  padding: 10px;
}

/* fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* slide-fade */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/* bounce */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

/* slide  mode="out-in"*/ 
.slide-enter-active, .slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

/* moveUp */
.moveUp-enter-active {
  animation: fadeIn 1s case-in;
}

@keyframes fadeIn {
  0% {
   opacity: 0;
  }
  50% {
     opacity: 0.5;
  }
  100% {
     opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp .3s case-in;
}
@keyframes moveUp{
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(-400px);
  }
}
</style>
