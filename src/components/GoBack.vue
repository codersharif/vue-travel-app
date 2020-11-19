<template>
  <span class="go-back">
    <button @click="goBack">Go Back</button>
  </span>
</template>
<script>
export default{
    methods:{
        goBack(){
         return this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.go-back{
    display: flex;
   cursor: pointer;
}
button{
    /* color: white;
    background: gray;*/
    padding: 10px; 
    border: 0;
}
</style>
