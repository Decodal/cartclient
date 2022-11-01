<template>
  <div class="order-table table-responsive">
    <table class="table table-bordered">
      <tbody>
      <tr v-for="paymentMethod in paymentMethods" :key="paymentMethod.id">
        <td>
          <p :class="{ 'has-text-weight-bold': paymentMethod.id === selectedPaymentMethod.id }">
            {{ paymentMethod.card_type }} ending {{ paymentMethod.last_four }}
            <br>
          </p>
        </td>
        <td>
          <a href="" class="btn btn-primary" @click.prevent="$emit('click', paymentMethod)">
            Pay with this
          </a>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
  
</template>

<script>
  export default {
    props: {
      paymentMethods: {
        required: true,
        type: Array
      },

      selectedPaymentMethod: {
        required: true,
        type: Object
      }
    }
  }
</script>
