import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fansReducer from "./fansReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import peopleReducer from "./peopleReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["peopleReducer"]
};

const rootReducer = combineReducers({ fansReducer, peopleReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
