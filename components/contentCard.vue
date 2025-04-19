<template>
    <v-card>
        <v-text-field
            v-model="collection"
            label="collection"
        />
        <v-btn @click="getRecords">Get records</v-btn>
        <div v-if="records">{{ records }}</div>
    </v-card>
</template>
<script setup lang="ts">
const { pb } = usePocketbase();

const collection = ref('');

const records = ref({});
async function getRecords() {
    records.value = await pb.collection(collection.value).getList(1, 20);
}
// Use any PocketBase client method
</script>
