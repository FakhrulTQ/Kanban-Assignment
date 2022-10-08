<template>
  <b-container class="mt-5">
    <b-row class="mt-4">
      <b-col>
        <base-card>
          <header>
            <h3>{{ title }}</h3>
            <b-icon-trash class="buttonDelete" font-scale="1.5"></b-icon-trash>
          </header>
          <p>{{ desc }}</p>
          <base-badge :type="type">{{ type }}</base-badge>
        </base-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
import BaseBadge from "../UI/BaseBadge.vue";
import { BIconTrash } from "bootstrap-vue";
export default {
  components: {
    BaseCard,
    BIconTrash,
    BaseBadge
  },
  props: ["title", "desc", "type"],
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
</style>
