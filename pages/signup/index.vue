<template>
  <div>

    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Signup</li>
        </ul>
      </div>
    </div>

    <div class="signup-area ptb-60">
      <div class="container">
        <div class="signup-content">
          <div class="section-title">
            <h2><span class="dot"></span> Create an Account</h2>
          </div>
          <!-- <Notification :message="error" v-if="error"/> -->
          <form class="signup-form" method="post" @submit.prevent="register">
            <div class="form-group">
              <label>Your Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your name"
                id="name"
                name="name"
                v-model="form.name"
              />
            </div>

            <!-- <div class="form-group">
              <label>Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your Last name"
                id="lname"
                name="lname"
                v-model="lastname"
              />
            </div> -->

            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email"
                id="name"
                name="name"
                v-model="form.email"
                  required
              />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter your password"
                id="password"
                name="password"
                v-model="form.password"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary">Signup</button>

            <nuxt-link to="/" class="return-store"
              >or Return to Store</nuxt-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/globals/Notification'

export default {
  components: {
    Notification,
  },
  data() {
    return {
      form : {
        name: '',
        email: '',
        password: '',
        error: null
      }
      
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('/auth/register', this.form );

        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password,
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>