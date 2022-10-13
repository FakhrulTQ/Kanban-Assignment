<template>
  <div>
    <base-card>
      <add-task @submit-task="addTask"></add-task>
    </base-card>
    <stored-task></stored-task>
  </div>
</template>

<script>
import StoredTask from "./StoredTask.vue";
import AddTask from "./AddTask.vue";
import BaseCard from "../UI/BaseCard.vue";
import db from "../../db/db";

import Swal from "sweetalert2";


export default {
  name: "TheTask",
  components: {
    StoredTask,
    AddTask,
    BaseCard,
  },
  data() {
    return {
      // db,
      storedTask: [
        // { id: "s", title: "Sleep", desc: "Sleep 12 hours", types: "Todo" },
        // { id: "e", title: "Eat", desc: "Eat more", types: "Todo" },
      ],
    };
  },
  provide() {
    return {
      tasks: this.storedTask,
      addTask: this.addTask,
      deleteTask: this.removeTask,
    };
  },
  methods: {
    // addTask(title, desc, types) {
    //   const newTask = {
    //     id: new Date().toISOString(),
    //     title: title,
    //     desc: desc,
    //     types: types,
    //   };
    //   this.storedTask.push(newTask);
    // },
    async addTask(listInputTask){
       if (listInputTask[0] === "" || listInputTask[1] === "") {
          Swal.fire("Fill up the form.");
        } else {
          // this.addTask(enteredTitle, listInputTask, enteredType);
          console.log(`${listInputTask[0]}`);
          console.log(`${listInputTask[1]}`);
          console.log(`${listInputTask[2]}`);
  
          const id = await db.tasks.add({
            id: new Date().getTime(),
            title: listInputTask[0],
            desc: listInputTask[1],
            type: listInputTask[2],
          });
          console.log(`${id}`);
  
          const taskItemDB = await db.tasks.get(id);
          this.storedTask.push(taskItemDB);
        }
    },
    async removeTask(taskId) {
      const taskIndex = this.storedTask.findIndex((task) => task.id === taskId);
      await db.tasks.delete(taskId)
      this.storedTask.splice(taskIndex, 1);
    },
    toggleSetType() {
      this.storedTask.types = "done";
    },
  },
  mounted(){
    (async()=>{
      const taskDb = await db.tasks.toArray();

      taskDb.forEach((el)=>{
        this.storedTask.push(el);
      });
    })();
  }
};
</script>

<style lang="scss">
body {
  background-color: #f8f9fb;
}
</style>
