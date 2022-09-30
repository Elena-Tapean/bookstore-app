<template>
    <main class="main-grid">
        <!--<input type="text" 
            @input="handleSearch"
            v-model="search"
            placeholder="search product..." />-->
        <!--<div>
            <button @click="decrement(product.id)">-</button>
            <span>{{ product.count || 0 }}</span>
            <button :disabled="product.quantity && product.quantity <= product.count" 
                    @click="increment(product.id)">+</button>
            <span v-if="product.quantity && product.quantity <= product.count">Max stock reached</span>
          </div>
          <button :disabled="!product.count || product.count === 0" 
                  @click="addToBasket(product)">
          Add to Basket
          </button>-->
    </main>
</template>

<script>
export default {
    name: 'exHome'
}
</script>