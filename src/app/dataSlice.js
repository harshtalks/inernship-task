import { createSlice, current } from "@reduxjs/toolkit";
import dummydata from "../data/dummy";

// Create a slice of the state
export const dataSlice = createSlice({
  name: "records",
  initialState: window.localStorage.getItem("records")
    ? JSON.parse(window.localStorage.getItem("records"))
    : dummydata,
  reducers: {
    addAnnonations: (state, action) => {
      const id = action.payload.id;
      const annonationObj = action.payload.annonationObj;

      state
        .filter((el) => el.id === id)
        .map((el) => el.annonations.push(annonationObj));
    },
    removeAnnonation: (state, action) => {
      const record = action.payload.record;
      const id = action.payload.id;
      //   console.log(id, record);

      state.map((el) => {
        if (el.id === record) {
          return el.annonations.filter((annonation) => annonation.id !== id);
        }
        return el;
      });
    },
  },
});

export const { addAnnonations, removeAnnonation } = dataSlice.actions;

export default dataSlice.reducer;
