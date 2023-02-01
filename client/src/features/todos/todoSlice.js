import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/index'

const initialState = {
  todos: [],
  responseStatus: ""
}

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await api.fetchTodos()
    return response.data
  } catch (error) {
    return error.response.data.message
  }
})

export const fetchTodo = createAsyncThunk("todos/fetchTodo", async (id) => {
  try {
    const response = await api.fetchSingleTodo(id);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
})

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await api.createTodo(todo)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({id, todo}, { rejectWithValue }) => {
    try {
      const response = await api.updateTodo(id, todo)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteTodo(id)
      return id
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
)

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      return {
        ...state,
        responseStatus: "pending"
      }
    },
    [fetchTodos.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: action.payload,
        responseStatus: "success"
      }
    },
    [fetchTodos.rejected]: (state) => {
      return {
        ...state,
        responseStatus: "rejected"
      }
    },
    [fetchTodo.pending]: (state) => {
      return {
        ...state,
        responseStatus: "pending"
      }
    },
    [fetchTodo.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      ),
        responseStatus: "success"
      }
    },
    [fetchTodo.rejected]: (state) => {
      return {
        ...state,
        responseStatus: "rejected"
      }
    },
    [createTodo.pending]: (state) => {
      return {
        ...state,
        responseStatus: "pending",
      }
    },
    [createTodo.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
        responseStatus: "success"
      }
    },
    [createTodo.rejected]: (state) => {
      return {
        ...state,
        responseStatus: "rejected"
      }
    },
    [updateTodo.pending]: (state) => {
      return {
        ...state,
        responseStatus: "pending"
      }
    },
    [updateTodo.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
        responseStatus: "success"
      }
    },
    [updateTodo.rejected]: (state) => {
      return {
        ...state,
        responseStatus: "rejected"
      }
    },
    [deleteTodo.pending]: (state) => {
      return {
        ...state,
        responseStatus: "pending"
      }
    },
    [deleteTodo.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
        responseStatus: "success"
      }
    },
    [deleteTodo.rejected]: (state) => {
      return {
        ...state,
        responseStatus: "rejected"
      }
    }
  }
})

export default todoSlice.reducer;