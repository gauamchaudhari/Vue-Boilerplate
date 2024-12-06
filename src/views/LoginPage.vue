<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>In</b>Store</a>
      </div>
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <form @submit.prevent="onSubmit">
            <!-- Email Field -->
            
            <div class="form-group mb-3">
              <DynamicField
                v-model="email"
                label="Email"
                id="email"
                type="email"
                :error="errors.email"
                placeholder="Enter your email"
              />
            </div>

            <!-- Password Field -->
            <div class="form-group mb-3">
              <DynamicField
                v-model="password"
                label="Password"
                id="password"
                type="password"
                :error="errors.password"
                placeholder="Enter your password"
              />
            </div>

            <!-- Submit Button -->
            <div class="form-group mb-3">
              <button type="submit" class="btn btn-primary btn-block">
                Sign In
              </button>
            </div>
          </form>

          <!-- Notification -->
          <Notification
            :message="notification"
            v-if="notification"
            type="error"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";
import { loginSchema } from "@/utils/validationSchema";
import axios from "axios";
import { mapActions } from "vuex";
import DynamicField from "@/components/common/DynamicField.vue";
import Notification from "@/components/common/NotificationMessage.vue";
console.log("called");
export default {
  components: { DynamicField, Notification },
  setup() {
    const { handleSubmit, errors } = useForm({ validationSchema: loginSchema });
    const { value: email } = useField("email");
    const { value: password } = useField("password");
    return { email, password, errors, handleSubmit };
  },
  data() {
    return { notification: null };
  },
  methods: {
    ...mapActions(["login"]),
    async onSubmit(values) {
      try {
        const response = await axios.post("/api/login", values);
        const { user, token } = response.data;
        this.login({ user, token }); // Store in Vuex
        this.$router.push({ name: "Dashboard" });
      } catch (error) {
        this.notification = "Invalid credentials";
      }
    },
  },
};
</script>
