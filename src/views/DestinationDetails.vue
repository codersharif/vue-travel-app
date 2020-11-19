<template>
  <div>
      <GoBack />
    <section class="destination">
      <h2>{{ destination.name }}</h2>
      <div class="destination-details">
        <img
          :src="require('@/assets/' + destination.image)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experience">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div
          v-for="experience in destination.experiences"
          :key="experience.name"
          class="card"
          id="experience"
        >
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },
              hash: '#experience'
            }"
            :alt="experience.name"
          >
            <img
              :src="require('@/assets/' + experience.image)"
              :alt="experience.name"
            />
            <span class="card-text">
              {{ experience.name }}
            </span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path"/>
    </section>
  </div>
</template>

<script>
import store from "@/store.js";
import GoBack from "@/components/GoBack"
export default {
  components:{
    GoBack
  },
  data() {
    return {
      // slug:this.$route.params.slug
    };
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    }
  }
};
</script>
<style scoped>
img {
  max-width: 600px;
  max-height: 400px;
  height: auto;
  width: 100%;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.experience{
  padding: 40px 0;
}
.cards {
  display: flex;
  justify-content: space-between;
}

.cards img {
  max-height: 200px;
}
.card {
  position: relative;
  padding: 0 20px;
}
.card-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
</style>