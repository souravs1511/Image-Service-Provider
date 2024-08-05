// import { createSlice, nanoid } from '@reduxjs/toolkit';



// let Addvideo = JSON.parse(localStorage.getItem("AddVideos")) || [];
// console.log("ad>>>>>>>".Addvideo);
// const initialState = {
//   AddVideos: Addvideo
// }

// const UserVideoSlice = createSlice({
//   name: "Videos",
//   initialState,
//   reducers: {
//     uservideos: (state, action) => {
//       const Data = {
//         id: nanoid(),
//         VideoName: action.payload.VideoName,
//         Image: action.payload.Image,
//         Count:0,
//         isLike:false,
//       }
//       console.log("dataaaa>>>>>",Data);
//       state?.AddVideos?.push(Data);
//       localStorage.setItem("AddVideos", JSON.stringify(state.AddVideos))
//     },

//     removeMovie: (state, action) => {
//       let updateList = state?.AddVideos?.filter(
//         (movie) => movie.id !== action.payload
//       );

//       localStorage.setItem("AddVideos", JSON.stringify(updateList)) || [];

//       return {
//         AddVideos: updateList,
//       };
//     },
//   }

// });


// export const { uservideos, removeMovie } = UserVideoSlice.actions;
// export default UserVideoSlice.reducer;


