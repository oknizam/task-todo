import { createSlice } from "@reduxjs/toolkit";
var id = 0;
export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      console.log("action", action.payload);
      state.taskList.push({
        id: id++,
        ...action.payload,
      });
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    updateTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
      console.log("action", action.payload);
      state.taskList.push({
        id: id++,
        ...action.payload.task,
      });
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
