<template>
  <div class="ui cards" style="margin: 10px">
	<input type="search" placeholder="Search..." v-model="searchQuery"  />
    <i class="search icon"></i>
    <div
      class="card ui fluid"
      v-for="product in searchedProducts"
      :key="product.id"
      style="margin: 0"
    >
      <div class="content">
        <!-- <img class="right floated mini ui image" :src="product.imageURL" /> -->
        <div class="header">{{ product.name }}</div>
        <div class="meta">
          {{ product.location }} | {{ product.town }} Kg |
          {{ product.price }} pack
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
export default {
  setup() {
	const searchQuery = ref("");
    const products = reactive([]);
    onMounted(async () => {
      try {
        const productsSnap = await axios.get('http://localhost:8000/api/v1/listings').then(res => {
          products.push(res.data());
        });
      } catch (e) {
        console.log("Error Loading Products");
      }
    });
	const searchedProducts = computed(() => {
      return products.value.filter((product) => {
        return (
          product.title
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
});
    return { products,searchedProducts, searchQuery };
  },
};
</script>

<style>
:root {
	font-size: 8px;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
body {
	background-color: #ffffff;
}

h1 {
	font-family: "Montserrat", sans-serif;
	font-size: 3rem;
	font-weight: 500;
	letter-spacing: 2%;
	line-height: 30px;
	color: #464141;
}

h2 {
	font-family: "Montserrat", sans-serif;
	font-size: 2.5rem;
	font-weight: 500;
	letter-spacing: 2%;
	line-height: 24px;
	color: #464141;
}

p {
	font-family: "Montserrat", sans-serif;
	font-size: 2rem;
	font-weight: weight(regular);
	letter-spacing: 2%;
	line-height: 20px;
	color: #a2a4aa;
}
.app {
	margin: auto;
	width: 50%;
    height: 40vh    ;
	max-width: 400px;
}
.app-warpper {
	margin: auto;
}

.search-bar {
	text-align: center;
	margin-top: 4rem;
}
.search-bar input {
	padding: 2rem;
	min-width: 40rem;
}

.items-wrapper {
	margin-top: 40px;

	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
}

/* item card */
.item-card {
	min-width: 160px;
	min-height: 180px;
	background-color: #f6f6f6;
	border-radius: 7px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 10px 10px 0;
}

.item-card__icon-circle {
	background-color: #fffcfc;
	width: 85px;
	height: 85px;
	border-radius: 50%;
	margin: 0 auto 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

.item-card__icon-circle img {
	max-width: 60px;
	max-height: 60px;
	object-fit: contain;
}

.item-card__variety {
	color: #464141;
	text-align: center;
	margin: 15px auto 0 auto;
	text-transform: lowercase;
	text-transform: capitalize;
}

.item-card__title {
	font-weight: 500;
	color: #464141;
	margin: 15px auto 15px auto;
	text-transform: lowercase;
	text-transform: capitalize;
}

.item-card__code {
	color: #36b16c;
	margin: 15px auto 0 auto;
}
</style>