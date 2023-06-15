<script lang="ts">

import Header from '@/components/Header.vue';

export default {
  name: "Bai3",
  components: {
    Header,
  },
  data() {
    return {
      listData: [
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
        },
      ],
      first: "",
      second: "",
      message: "",
    };
  },
  methods: {
    checkEmpty() {
      if (!this.first || !this.second) this.message = "error";
      else {
        this.listData.push({
          id: this.listData[this.listData.length - 1].id + 1,
          firstName: this.first,
          lastName: this.second,
        });
        this.first = "";
        this.second = "";
        this.message = "success";
      }
    },
    handleDelete(id: number) {
      this.listData = this.listData.filter((e) => e.id !== id);
      alert("Delete successfully~!");
    },
  },
  watch: {
    first() {
      if (!(this.message === "success" && !this.first)) this.message = "";
    },
    second() {
      if (!(this.message === "success" && !this.second)) this.message = "";
    },
  },
};
</script>

<template>
  <Header hwCount="3"/>
  <!-- <h1 class="text-center">Homework 3</h1> -->
  <br />
  <h2>Form:</h2>
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">@</span>
    <input
      type="text"
      class="form-control"
      placeholder="FirstName"
      aria-label="FirstName"
      aria-describedby="addon-wrapping"
      v-model="first"
    />
  </div>
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">@</span>
    <input
      type="text"
      class="form-control"
      placeholder="LastName"
      aria-label="LastName"
      aria-describedby="addon-wrapping"
      v-model="second"
    />
  </div>
  <div class="messageError" v-if="message === 'error'">
    Input field cannot be empty!
  </div>
  <div class="messageSuccess" v-if="message === 'success'">
    Add successfully!
  </div>

  <br />

  <div ml-2>
    <button type="button" class="btn btn-success" @click="checkEmpty">
      Add
    </button>
  </div>

  <br />
  <br />

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
      <tr v-for="(item, index) in listData" :key="`item${index}`">
        <th>{{ item.id }}</th>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            @click="handleDelete(item.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
