<template>
  <div class="todo-list">
    <div class="container">
      <div class="todo-list__logo">
        <img class="todo-listt__logo-img" src="~@/assets/img/logo.svg" alt="logo" />
        <a class="todo-list__logo-link" href="#"></a>
      </div>
      <div class="todo-list__task">
        <h2 class="task__title">Thank you Admin!</h2>
        <div v-if="!isEditing" class="task__input">
          <input v-model="inputTask" @keyup.enter="addTask" id="input-task" type="text" placeholder="Enter task">
          <button @click="addTask" id="btn-addtask">Add task</button>
        </div>
        <div v-else class="task__input">
          <input v-model="inputTask" @keyup.enter="updateTask" id="input-task" type="text" placeholder="Enter task">
          <button @click="updateTask" id="btn-addtask">Update task</button>
        </div>
        <div class="task__list">
          <h3 class="task__list-title">Task list</h3>
            <div
              v-for="(task, index) of todoList"
              :key="index" 
              class="task__list-item">
                <p class="list__item-description">{{ task }}</p>
                <button class="list__item-btn-edit btn" @click="editTask(task, index)">Edit</button>
                <button class="list__item-btn-delete btn" @click="deleteTask(index)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      inputTask: '',
      todoList: [],
      isEditing: false,
    }
  },
  
  mounted() {
    if (localStorage.getItem('task')) {
      try {
        this.todoList = JSON.parse(localStorage.getItem('task'));
      } catch(e) {
        localStorage.removeItem('task');
      }
    }
  },

  methods: {
    addTask() {
      if (!this.inputTask) {
        return
      }

      this.todoList.unshift(this.inputTask);
      this.inputTask = '';
      this.saveList();
    },

    deleteTask(index) {
      this.todoList.splice(index, 1);
      this.saveList();
    },

    updateTask() {
      this.todoList.splice(this.selectedIndex, 1, this.inputTask)
      this.inputTask = ''
      this.isEditing = false
      this.saveList();
    },

    editTask(task, index) {
      console.log(task)
      this.isEditing = true
      this.inputTask = task
      this.selectedIndex = index
      this.saveList();
    },

    saveList() {
      const parsed = JSON.stringify(this.todoList);
      localStorage.setItem('task', parsed);
    }
    
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/main.scss";

.todo-list {
  background: $color_gradient;
  text-align: center;
  position: relative;
  height: 100vh;
  .container {
    .todo-list__logo {
      padding-top: 65px;
      img {
        width: 185px;
        height: 120px;
      }
    }
  }
  .todo-list__task {
    padding: 0 10px;
    background-color: #fff;
    position: relative;
    z-index: 2;
    left: 0;
    top: 66px;
    .task__title {
      padding-top: 32px;
    }
    .task__input-label {
      margin-top: 32px;
    }
    .task__input {
      text-align: start;
      margin-left: auto;
      margin-right: auto;
      max-width: 700px;
      display: flex;
      margin-bottom: 40px;
      margin-top: 30px;
      input {
        width: 100%;
        padding: 10px 15px;
        height: 53px;
        outline: none;
        border: 1px solid $color_succes;
      }
      button {
        font-family: $font_roboto-r;
        font-size: 20px;
        line-height: 29px;
        color: #fff;
        width: 185px;
        padding: 10px 0;
        margin-left: 15px;
        background-color: $color_primary;
        border: 2px solid $color_primary;
        transition: all .1s ease-in-out;
      }
      button:hover {
        border: 2px solid $color_primary;
        background-color: #fff;
        color: $color_primary;
      }
    }
    .task__list {
      height: 50vh;
      overflow: auto;
      .task__list-item {
        display: flex;
        align-items: center;
        max-width: 700px;
        margin: 15px auto;
        p {
          width: 540px;
          border: 1px solid $color_succes;
          margin-right: 10px;
          padding: 10px 15px;
          text-align: start;
        }
        .btn {
          font-family: $font_roboto-r;
          font-size: 16px;
          line-height: 29px;
          color: #fff;
          width: 70px;
          padding: 7px 7px;
          margin: 0 5px;
        }
        .list__item-btn-edit {
          background-color: $color_primary;
          opacity: 0.8;
          border: 1px solid $color_primary;
        }
        .list__item-btn-delete {
          background-color: $color_error;
          opacity: 0.8;
          border: 1px solid $color_error;
        }
        .btn:active {
          opacity: 0.6;
        }
      }
    }
  }
}

.todo-list::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 115px;
  width: 100%;
  background-color:  #FAF7F7;
}

@media(max-width: 550px) {
  .todo-list {
    .container {
      .todo-list__logo {
        padding-top: 20px;
        img {
          width: 100px;
          height: 65px;
        }
      }
      .todo-list__task {
        top: 35px;
        .task__input {
          input {
            height: 40px;
          }
          button {
            padding: 0;
            font-size: 18px;
          }
        }
      }
      .task__list {
        height: 60vh;
        .task__list-item {
          .list__item-description {
            padding: 7px 10px;
          }
          .btn {
            padding: 5px 7px;
          }
        }
      }
    }
  }
}

</style>