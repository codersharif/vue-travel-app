<template>
  <nav id="nav">
    <p class="logo">The Vue Travel App</p>
   <ul class="nav-links">
     <li class="links">
      <router-link to="/">
        Home
      </router-link>
     </li>
     <li v-for="destination in destinations" :key="destination.name" class="links">
       <router-link :to="{name: 'DestinationDetails', params: {slug: destination.slug}}">
        {{destination.name}}
       </router-link>
     </li>
     <li class="links">
      <router-link to="/user">
        Dashboard
      </router-link>
     </li>
   </ul>
  </nav>
</template>
<script>
import store from "@/store"
export default{
  data(){
    return{
      destinations:store.destinations
    }
  }
};
</script>

<style scoped>
#nav{
  display: flex;
  align-items: center;
  position: static;
  top: 0;
  background: white;
  border-bottom:1px solid gray;
  z-index: 1;
}
#nav a{
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
 #nav a.vue-link-active-class {
  color: purple;
}
.nav-links{
  display: flex;
}
.links{
  padding-right:20px;
  list-style: none;
}
.links:hover{
  text-decoration: underline;
}
.logo{
  font-size: 20px;
  font-weight: bold;
  color: purple;
}
</style>