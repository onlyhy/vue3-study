import {ref, watchEffect} from 'vue';

// 缓存操作(刷新页面，数据还在)
const todoStorage = {
    fetch() {
      let todos = JSON.parse(localStorage.getItem("vue3-todos") || "[]");
      todos.forEach((todo, index) => {
        todo.id = index + 1;
      });
      return todos;
    },
    save(todos) {
      localStorage.setItem("vue3-todos", JSON.stringify(todos));
    },
  };

  export function useTodos(state) {
      const todos = ref(todoStorage.fetch())

      function addTodo() {
        todos.value.push({
          id: todos.value.length + 1,
          title: state.newTodo,
          completed: false,
        });
        state.newTodo = "";
      }
    
      function removeTodo(todo) {
        todos.value.splice(todos.value.indexOf(todo), 1);
      }
    
      // 依赖在调用时就建立了，可以不用在前面watch state.todos了，最简单的写法
      watchEffect(() => {
        todoStorage.save(todos.value);
      });

      return {todos, addTodo, removeTodo}
  }

  