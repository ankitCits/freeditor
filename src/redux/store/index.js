import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //default storage
import { rootReducer } from "../reducers";
import { API_URL } from "../../constants/api";

const persistConfig = {
  key: "root",
  storage,
};

const loggerMiddleware = createLogger(); //console logger

/**-------------------Initiate axios instance--------------------------- **/

const configureAxios = () => {
  return axios.create({
    baseURL: `${API_URL}`,
    timeout: 20000,
    withCredentials: false,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
};

/**------------------configure redux persist----------------------------**/

const configurePersistStore = () => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return persistedReducer;
};

export const axiosInstance = configureAxios();

/**-------------------Axios response Intercepertor--------------------------- **/

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // const errors = handleErrorResponse(error);
    const errors = () => {};
    return Promise.reject();
  }
);

/**-------------------Added Middleware for actions----------------------- **/

const configureMiddlewares = () => {
  let middleware = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middleware.push(loggerMiddleware);
  }

  return middleware;
};

/**-------------------Create Store-------------------------------------- **/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const middlewares = configureMiddlewares();
  const persistReducers = configurePersistStore();

  let store = createStore(
    persistReducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
