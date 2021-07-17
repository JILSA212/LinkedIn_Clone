import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/userSlice';


// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

