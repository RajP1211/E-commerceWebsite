import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// If data is available, take it from localStorage
const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Check for existing guest ID or generate a new one
const initialGuestId =
  localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", initialGuestId);

// Initial state
const initialState = {
  user: userFromStorage,
  guestId: initialGuestId,
  loading: false,
  error: null
};

// Async thunk for login
export const loginUser = createAsyncThunk("auth/loginUser", async (userData, { rejectWithValue }) => {
    console.log(userData,'userData',)
console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);
// const backendUrl = process.env.REACT_APP_BACKEND_URL;

  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, userData);
    console.log(response,'response')
    localStorage.setItem("userInfo", JSON.stringify(response.data.user));
    localStorage.setItem("userToken", response.data.token);
    return response.data.user; // return user data
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for registration
export const registerUser = createAsyncThunk("auth/registerUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, userData);
    localStorage.setItem("userInfo", JSON.stringify(response.data.user));
    localStorage.setItem("userToken", response.data.token);
    return response.data.user; // return user data
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.guestId = `guest_${new Date().getTime()}`; // Reset guest ID
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      localStorage.setItem("guestId", state.guestId); // Save new guest ID
    },
    generateNewGuestId: (state) => {
      state.guestId = `guest_${new Date().getTime()}`;
      localStorage.setItem("guestId", state.guestId);
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      })

      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Registration failed";
      });
  }
});

export const { logout, generateNewGuestId } = authSlice.actions;
export default authSlice.reducer;
