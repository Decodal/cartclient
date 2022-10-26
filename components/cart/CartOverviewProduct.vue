<template>
  <tr>
    <!-- <td width="120">
      <img src="http://via.placeholder.com/60x60" alt="">
    </td> -->
    <td class="product-thumbnail">
        <a href="#">
            <!-- <img :src="cart.image" :alt="cart.name" /> -->
            <img src="http://via.placeholder.com/60x60" alt=""/>
        </a>
    </td>
    <!-- <td>
      {{ product.product.name }} / {{ product.type }} {{ product.name }}
    </td> -->
    <td class="product-name">
        <nuxt-link :to="`/products-details/${product.id}`">
          {{ product.product.name }}
        </nuxt-link>
        <ul>
            <li>Color: <strong>{{ product.type }}</strong></li>
            <li>Size: <strong>{{ product.name }}</strong></li>
            <li>Material: <strong>Cotton</strong></li>
        </ul>
    </td>
    <td>
      £15
    </td>
    <td class="product-quantity">
        <!-- <div class="input-counter"> -->
            <!-- <span @click="onDecrement(cart.id, cart.quantity)" class="minus-btn"><i class="fas fa-minus"></i></span>
            {{cart.quantity}}
            <span @click="onIncrement(cart.id)" class="plus-btn"><i class="fas fa-plus"></i></span> -->
            <select v-model="quantity">
              <option value="0" v-if="product.quantity == 0">0</option>
              <option
                :value="x"
                v-for="x in product.stock_count"
                :key="x"
                :selected="x == product.quantity"
              >
                {{ x }}
              </option>
            </select>
        <!-- </div> -->
    </td>
    <!-- <td width="160">
      <div class="field">
        <div class="control">
          <div class="select is-fullwidth">
            <select v-model="quantity">
              <option value="0" v-if="product.quantity == 0">0</option>
              <option
                :value="x"
                v-for="x in product.stock_count"
                :key="x"
                :selected="x == product.quantity"
              >
                {{ x }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </td> -->
    <td class="product-subtotal">
        <span class="subtotal-amount"> {{ product.total }}</span>

        <a href="" @click.prevent="destroy(product.id)" class="remove"><i class="far fa-trash-alt"></i></a>
    </td>
   
  </tr>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    computed: {
      quantity: {
        get () {
          return this.product.quantity
        },

        set (quantity) {
          this.update({ productId: this.product.id, quantity })
        }
      }
    },

    props: {
      product: {
        required: true,
        type: Object
      }
    },

    methods: {
      ...mapActions({
        destroy: 'cart/destroy',
        update: 'cart/update'
      })
    }
  }
</script>
