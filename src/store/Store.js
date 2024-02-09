import { configureStore } from '@reduxjs/toolkit'
import compilerReducer from './compilerSlice'
import authReducer from "./AuthSlice"

export default configureStore({
    reducer: {
        compiler:compilerReducer,
        auth:authReducer
    },
  })
