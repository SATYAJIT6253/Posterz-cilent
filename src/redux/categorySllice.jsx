import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../utils/axiosCilent";

export const fetchcategories = createAsyncThunk("/api/catogries", async () => {
        try 
        {
            const responsedata = await axiosClient.get("/categories?populate=image");
            return responsedata.data.data;
        } catch (error)
        {
            return Promise.reject(error);
        }
});
const categorySlice = createSlice({
  name: "categorySlice",
  initialState: {
    categories : [],
  },
  extraReducers: (builder)=>{
        builder.addCase(fetchcategories.fulfilled,(state,action)=>{
            state.categories = action.payload
        })
  },
});
export default categorySlice.reducer;