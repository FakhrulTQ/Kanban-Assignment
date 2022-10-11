<template>
  <b-container class="mt-5">
    <b-row class="mt-4">
      <b-col>
        <base-card class="taskCard">
          <header class="taskCard__header">
            <h3 class="taskCard__title">{{ title }}</h3>
            <b-icon-trash
              class="taskCard__buttonDelete"
              font-scale="1.5"
              @click="deleteTask(id)"
            ></b-icon-trash>
          </header>
          <p class="taskCard__desc">{{ desc }}</p>
          <div
            class="badge"
            ref="toggleType"
            :class="{ Done: isDone, Todo: !isDone }"
            @click="toggleSet()"
          >
            {{ types }}
          </div>
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
  data() {
    return {
      isDone: false,
    };
  },
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
  methods: {
    toggleSet() {
      if (this.types === "Todo") {
        this.isDone = true;
        this.$refs.toggleType.innerText = "Done";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 2rem;
  padding: 0.3rem 1rem;
  display: inline-block;
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

.taskCard {
  max-width: 25rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__title {
    font-weight: bold;
  }

  &__desc {
    font-weight: 500;
    font-size: 1.2rem;
  }

  &__buttonDelete {
    color: rgb(255, 93, 93);
    cursor: pointer;
  }
}
</style>
