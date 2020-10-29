<template>
  <section class="destination">
      <h2>{{destination.name}}</h2>
      <div class="destination-details">
        <img :src="require('@/assets/'+destination.image)" :alt="destination.name">
        <p>{{destination.description}}</p>
      </div>
  </section> 
</template>

<script>
import store from "@/store.js"
export default{
    data(){
        return{
            slug:this.$route.params.slug
        }
    },
    computed:{
        destination(){
            return store.destinations.find(
                destination => destination.slug === this.slug
            )
        }
    }

};
</script>
<style scoped>
img{
 max-width: 600px;
 max-height: 400px;
 height: auto;
 width: 100%;
}
.destination-details{
    display: flex;
    justify-content: space-between;
}
p{
    margin: 0 40px;
    font-size: 20px;
    text-align:left;
}

</style>