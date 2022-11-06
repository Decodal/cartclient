<template>

  <div>

    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Login</li>
        </ul>
      </div>
    </div>

    <div class="login-area ptb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="login-content">
              <div class="section-title">
                <h2><span class="dot"></span> Login</h2>
              </div>
              <b-alert v-if="errorMessage" show variant="danger">
                {{ errorMessage }}
              </b-alert>
              <form
                class="login-form"
                
                @keydown.enter="login"
              >
                <!-- <p v-if="formError" class="error">
                  {{ formError }}
                </p> -->
                <div class="form-group">
                  <label>Username</label>
                  <input
                    ref="username"
                    v-model="form.email"
                    type="text"
                    class="form-control"
                    placeholder="demo"
                    name="username"
                  />
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    placeholder="demo"
                    name="password"
                  />
                </div>

                <button type="submit" class="btn btn-primary" @click="login">Login</button>

                <nuxt-link to="/" class="forgot-password"
                  >Lost your password?</nuxt-link
                >
              </form>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="new-customer-content">
              <div class="section-title">
                <h2><span class="dot"></span> New Customer</h2>
              </div>

              <span>Create a Account</span>
              <p>
                Sign up for a free account at our store. Registration is quick
                and easy. It allows you to be able to order from our shop. To
                start shopping click register.
              </p>
              <nuxt-link to="/signup" class="btn btn-light"
                >Create A Account</nuxt-link >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: ["auth"],
    data () {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    computed: {
      // strategies: () => [
      //   { key: "auth0", name: "Auth0", color: "#ec5425" },
      //   { key: "google", name: "Google", color: "#4284f4" },
      //   { key: "facebook", name: "Facebook", color: "#3c65c4" },
      //   { key: "github", name: "GitHub", color: "#202326" },
      // ],
      redirect() {
        return (
          this.$route.query.redirect &&
          decodeURIComponent(this.$route.query.redirect)
        );
      },
      isCallback() {
        return Boolean(this.$route.query.callback);
      },
      errorMessage() {
        const { error } = this;
        if (!error || typeof error === "string") {
          return error;
        }
        let msg = "";
        if (error.message) {
          msg += error.message;
        }
        if (error.errors) {
          msg += `(${JSON.stringify(error.errors)
            .replace(/[{}"[\]]/g, "")
            .replace(/:/g, ": ")
            .replace(/,/g, " ")})`;
        }
        return msg;
      },
    },
    // middleware: [
    //   'redirectIfAuthenticated'
    // ],
    methods: {
    async login() {
      this.error = null;

      return this.$auth
        .loginWith("local", {
          data: {
            email: this.form.email,
            password: this.form.password,
          },
        })
        .catch((e) => {
          this.error = e.response.data;
        });
    },

    async localRefresh() {
      this.error = null;

      return this.$auth
        .loginWith("localRefresh", {
          data: {
            email: this.form.email,
            password: this.form.password,
          },
        })
        .catch((e) => {
          this.error = e.response.data;
        });
    },

  },
    // methods: {
    //   async signin () {
    //     try { await this.$auth.loginWith('local', {
    //       data: this.form
    //     }); } catch (e) { this.error = e.message; }

    //     if (this.$route.query.redirect) {
    //       this.$router.replace(this.$route.query.redirect)
    //       return
    //     }

    //     this.$router.replace({
    //       name: 'index'
    //     })
    //   }
    // }
  }
</script>
