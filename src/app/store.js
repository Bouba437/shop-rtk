import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from "./features/phones/phoneSlice";
import tvsReducer from "./features/tvs/tvSlice";
import commentsReducer from "./features/comments/commentsSlice"

const store = configureStore({
    reducer: {
        phone: phonesReducer,
        television: tvsReducer,
        comment: commentsReducer,
    }
})

export default store;