<script lang="ts">

import TextComponent from './TextComponent.vue';
import TableComponent from './TableComponent.vue';
import Header from '@/components/Header.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  
  name: 'Bai5',
  components: {
    Header,
    TextComponent,
    TableComponent,
  },
  data() {
    return {
      listData : [
        {
          id: 1,
          firstName: "Mark",
          lastName: "Otto",
        },
        {
          id: 2,
          firstName: "Jacob",
          lastName: "Thornton",
        },
        {
          id: 3,
          firstName: "Lazy",
          lastName: "Bird",
        }
      ],
    }
  },
  methods: {
    addItem(item: Record<string, string>)  {
      this.listData.push({
        id: this.listData[this.listData.length - 1].id + 1,
        firstName: item.firstName,
        lastName: item.lastName,
      });   
    },
    deleteItem(id: number) {
      this.listData = this.listData.filter((e) => e.id !== id);
      alert("Delete successfully~!")
    }
  },
});
</script>

<template>
  <Header hwCount="5"/>
  <TextComponent @confirmAdd="addItem" />
  <br />
  <br />
  <TableComponent :data="listData" @confirmDelete="deleteItem"/>
</template>