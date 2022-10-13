<template>
  <b-form @submit.prevent="submitTask">
    <div>
      <label for="title">Task</label>
      <b-form-input
        type="text"
        id="title"
        name="title"
        ref="titleIn"
        v-model="title"
      />
    </div>
    <div>
      <label for="title">Description</label>
      <b-form-input
        type="text"
        id="desc"
        name="desc"
        ref="descIn"
        v-model="desc"
      />
    </div>
    <div class="form-group">
      <label for="types">Type</label>
      <b-form-input
        type="text"
        id="types"
        name="types"
        ref="typeIn"
        v-model="type"
        disabled
      />
    </div>
    <div>
      <b-button class="btnSubmit" type="submit">Add Task</b-button>
    </div>
  </b-form>
</template>

<script>
// import Swal from "sweetalert2";
// import db from "../../db/db.js";

export default {
  data() {
    return {
      title: "",
      desc: "",
      type: "Todo",
    };
  },
  methods: {
    submitTask() {
      try {
        const enteredTitle = this.$refs.titleIn.value;
        const enteredDesc = this.$refs.descIn.value;
        const enteredType = this.$refs.typeIn.value;

        const listInputTask = [enteredTitle, enteredDesc, enteredType];

        this.$emit('submit-task', listInputTask);

        // if (enteredTitle === "" || enteredDesc === "") {
        //   Swal.fire("Fill up the form.");
        // } else {
        //   this.addTask(enteredTitle, enteredDesc, enteredType);
        // }
        // console.log(`${enteredTitle}`);
        // console.log(`${enteredDesc}`);
        // console.log(`${enteredType}`);

        // const id = await db.tasks.add({
        //   id: new Date().getTime(),
        //   title: enteredTitle,
        //   desc: enteredDesc,
        //   type: enteredType,
        // });
        // console.log(`${id}`);
      } catch (error) {
        console.log("fail");
      }
    },
  },
  emit: ['submit-task'],
  inject: ["addTask"],
};
</script>

<style lang="scss" scoped>

form {
  color: black;
  font-weight: bold;
}

.btnSubmit {
  background-color: rgb(0, 92, 167);
  border: none;
  border-radius: 1rem;
  font-weight: 500;
}

</style>
