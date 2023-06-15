<template>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for=" (item,index) in data" :key="`item${index}`">
      <th>{{ item.id }}</th>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>
            <ButtonComponent type="delete" value="Delete" @click="confirmDelete(item.id)"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import ButtonComponent from './ButtonComponent.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TableComponent',
    props: {
        data: Array<{
            id: Number,
            firstName: String,
            lastName: String,
        }>,
    },
    components: {
        ButtonComponent,
    },
    methods: {
        confirmDelete(id: Number) {
            this.$emit('confirmDelete', id);
        }
    }

})
</script>

<style scoped>

</style>