<template>
  <b-container class="mt-5">
    <b-row class="mt-4">
      <b-col>
        <base-card>
          <header>
            <h3>{{ title }}</h3>
            <b-icon-trash
              class="buttonDelete"
              font-scale="1.5"
              @click="deleteTask(id)"
            ></b-icon-trash>
          </header>
          <p>{{ desc }}</p>
          <b-badge ref="toggleType" :class="types" @click="toggleSet()">
            {{ types }}
          </b-badge>
        </base-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
import { BIconTrash } from "bootstrap-vue";
export default {
  inject: ["deleteTask"],
  components: {
    BaseCard,
    BIconTrash,
  },
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    types: {
      type: String,
      required: true,
    },
  },
  // emits: ['toggle-type'],
  methods: {
    toggleSet() {
      if (this.types === 'Todo') {
        this.$refs.toggleType.innerText = 'Done'
      }
    },
  },
  // computed: {
  //   text() {
  //     return this.types.toUpperCase()
  //   }
  // }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buttonDelete {
  color: rgb(255, 93, 93);
  cursor: pointer;
}

.badge {
  background-color: #ccc;
  font-size: 1rem;
  color: #252525;
  border-radius: 30px;
  padding: 0.3rem 1rem;
  display: inline-block;
  margin-right: 0.5rem;
  cursor: pointer;
}

.Todo {
  background-color: #8b32ff;
  color: white;
}

.Done {
  background-color: #00a775;
  color: white;
}
</style>
