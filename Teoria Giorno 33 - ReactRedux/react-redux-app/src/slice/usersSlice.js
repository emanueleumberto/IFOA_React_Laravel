import { createSlice } from "@reduxjs/toolkit"

const initialState = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          password: "Pa$$word",
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          password: "Pa$$word",
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          password: "Pa$$word",
          phone: "1-463-123-4447",
          website: "ramiro.info",
        }
]



export const usersSlice = createSlice(
    {
        name: 'users',
        initialState: initialState,
        reducers: {
            addUser(state, action) {
                console.log(state, action)
            },
            deleteUser(state, action) {
                console.log(state, action)
            }
        }
    }
)


// Action creators are generated for each case reducer function
export const { addUser, deleteUser } = usersSlice.actions
export default usersSlice.reducer