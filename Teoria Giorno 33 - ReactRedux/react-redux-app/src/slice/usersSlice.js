import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userlist: [],
  loading: false,
  error: ""
} 

export const getAllUsers = createAsyncThunk("users/fetch", async () => {
    // Soluzione 1
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok) { throw new Error(response.statusText)}
    return response.json()

    // Soluzione 2
    /* return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if(!response.ok) { throw new Error(response.statusText)}
        else { return response.json()}
      }).then(json => json) */
      
})


// lo Slice è un elemento composto da nome, statoiniziale, reducers, azioni extrareducers
export const usersSlice = createSlice(
  {
    name: 'users',
    initialState: initialState,

    reducers: (create) => ({
      addUser: create.reducer((state, action) => {
        console.log(action);
        state.userlist.push(action.payload)
      }),
      deleteUser: create.reducer((state, action) => {
        console.log(action);
        state.userlist =  state.userlist.filter(ele => ele.email !== action.payload.email)
      })
    }),

    extraReducers: builder => {
      builder.addCase(getAllUsers.pending, (state, action) => {
          state.loading = true
        })
        .addCase(getAllUsers.rejected, (state, action) => {
          state.loading = false
          state.error = "Errore nel caricamento dei dati!!!"
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
          state.loading = false
          state.userlist = action.payload
        })
      }
  }
)

const { reducer, actions } = usersSlice;
export const { addUser, deleteUser } = actions;
export default reducer

// export default usersSlice.reducer
// export { actions.addUser, actions.deleteUser}

