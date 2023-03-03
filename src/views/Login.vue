<template>
  <v-container fill-height class="align-center justify-center d-flex">
    <v-col cols="10">
      <v-card align-center justify-center class="elevation-12" width="100%">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form @submit.prevent="submitForm()" id="login-form">
            <v-text-field
              v-model="state.email"
              required
              id="email"
              name="email"
              label="Email"
              type="text"
            ></v-text-field>
            <span v-if="v$.email.$error">
              {{ v$.email.$errors[0].$message }}
            </span>

            <v-text-field
              v-model="state.password"
              required
              id="password"
              name="password"
              label="Password"
              type="password"
            ></v-text-field>
            <span v-if="v$.password.$error">
              {{ v$.password.$errors[0].$message }}
            </span>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" type="submit" form="login-form">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import router from "@/router";

export default {
  setup() {
    const state = reactive({
      email: "",
      password: "",
    });

    const rules = computed(() => ({
      email: { required, email },
      password: { required, minLength: minLength(6) },
    }));

    const v$ = useVuelidate(rules, state);

    const generateToken = () => {
      return Math.random().toString(36).substr(2);
    };

    const submitForm = async () => {
      v$._value.$validate();

      if (!v$._value.$error) {
        sessionStorage.setItem("token", generateToken()); //only for test task
        await router.push("/");
      } else {
        return false;
      }
    };

    return { state, v$, submitForm };
  },
};
</script>
