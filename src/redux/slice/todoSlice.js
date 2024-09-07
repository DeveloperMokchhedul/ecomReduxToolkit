import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchTodo = createAsyncThunk("fetchTodo", async()=>{
  const data = await fetch("https://dummyjson.com/products")
  return data.json();

})



export const productSlice = createSlice({
  name: 'product',
  initialState:{
    isLoading:false,
    products:[],
    error:false
  },
  reducers: {
    // setProduct:(state, action)=>{
    //   state.products = action.payload.map((product) => ({
    //     ...product,
    //     quantity: 1, 
    //   }));
    // }
  },


  extraReducers:(builder)=>{
    builder.addCase(fetchTodo.pending, (state)=>{
      state.isLoading = true
    });
    builder.addCase(fetchTodo.fulfilled, (state, action)=>{
      state.isLoading = false,
      state.products = action.payload
    });
    builder.addCase(fetchTodo.rejected, (state)=>{
      state.error =true
    })
  }
})


export const { setProduct } = productSlice.actions

export default productSlice.reducer