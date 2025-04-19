<template>
    <div>
        <v-text-field
            v-model="email"
            label="E-Mail"
        />
        <v-text-field
            v-model="password"
            type="password"
            label="Password"
        />

        <v-btn @click="loginWithPocketbase">Login</v-btn>
        <div
            v-if="user"
            class="my-4"
        >
            Welcome, {{ user.name }}!
        </div>
    </div>
</template>

<script setup lang="ts">
const email = ref('');
const password = ref('');

const { user, login } = usePocketbaseAuth();
async function loginWithPocketbase() {
    await login({
        email: email.value,
        password: password.value,
    });
}
</script>
