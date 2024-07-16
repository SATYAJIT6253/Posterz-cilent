import {  configureStore ,combineReducers} from "@reduxjs/toolkit";
import categoryReducer from "./categorySllice";
import cartReducer from "./cartSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';



const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
  cartReducer,
  categoryReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  
})
export const persistor = persistStore(store)

// export const store = configureStore({
//     reducer: {
//         categoryReducer,
//         cartReducer,
//       },
// });

