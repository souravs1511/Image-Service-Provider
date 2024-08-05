import { createSlice, nanoid } from "@reduxjs/toolkit";

let User = JSON.parse(localStorage.getItem("registeruser")) || [];
let Allposts = JSON.parse(localStorage.getItem("Allpost")) || [];

const initialState = {
  RegisterUsers: User,
  Allpost: Allposts,
  userLoginData: {},
};

const RegisterSlice = createSlice ({
  name: "Register",
  initialState: initialState,
  reducers: {
    // For Add New User [Registrasion]
    Adduser: (state, action) => {
      const Data = {
        id: nanoid(),
        username: action.payload.username,
        Email: action.payload.Email,
        Password: action.payload.Password,
        Post: [],
      };
      state.RegisterUsers.push(Data);
      localStorage.setItem("registeruser", JSON.stringify(state.RegisterUsers));
    },

    userDeletes: (state, action) => {
      const { userId } = action.payload;
      console.log("<<<<<", userId);
      let updateUser = state.RegisterUsers.filter((user) => user.id !== userId);
      console.log("updateuserrrr", updateUser);

      localStorage.setItem("registeruser", JSON.stringify(updateUser)) || [];

      return {
        RegisterUsers: updateUser,
      };
    },

    // For Add Image Title

    uservideos: (state, action) => {
      const Data = {
        id: nanoid(),
        Title: action.payload.Title,
        Image: action.payload.Image,
        likedBy: [],
        comments: [],
        userlike: [],
        count: 0,
        username: action.payload.userDetails,
        isLikeByme: false,
      };
      const id = action.payload.id;
      console.log("dataaaa>>>>>", Data);
      const match = state.RegisterUsers.find((items) => items.id === id);
      if (match) {
        match.Post.push(Data);
        state.Allpost.push(Data);
      }
      console.log("Upadated USer Post", match?.Post);
      localStorage.setItem("registeruser", JSON.stringify(state.RegisterUsers));
      localStorage.setItem("Allpost", JSON.stringify(state.Allpost));
    },

    // To Remove Images

    removeUserImage: (state, action) => {
      const { userId, postId } = action.payload;
      const user = state.RegisterUsers.find((user) => user.id === userId);

      if (user) {
        user.Post = user.Post.filter((post) => post.id !== postId);
        console.log("Updated user posts after removal:", user.Post);
        localStorage.setItem(
          "registeruser",
          JSON.stringify(state.RegisterUsers)
        );

        // for remove all post from users

        state.Allpost = state.Allpost.filter((post) => post.id !== postId);
        localStorage.setItem("Allpost", JSON.stringify(state.Allpost));
      }
    },

    // For Image Like:-->>>

    likeVideo: (state, action) => {
      const { userId, postId, username } = action.payload;

      const user = state.RegisterUsers.find((user) => user.id === userId);
      console.log("userlike", user);

      const post = state.Allpost.find((post) => post.id === postId);
      console.log("postlike", post);

      const userpost = user?.Post?.find((userpost) => userpost?.id === postId);
      console.log("userpostlike", userpost);

      if (post && user) {
        if (!post.likedBy.includes(userId)) {
          post.count += 1;
          post.likedBy.push(userId);
          post.userlike.push(username);
          console.log("Post liked, new count:", post.count);

          if (userpost) {
            userpost.likedBy.push(userId);
            userpost.userlike.push(username);
            userpost.count += 1;
            console.log("User's post liked, new count:", userpost.count);
          }
        } else if (post.count > 0) {
          post.count -= 1;
          post.likedBy = post.likedBy.filter((user) => user !== userId);
          console.log("Post unliked, new count:", post.count);

          post.userlike = post.userlike.filter((user) => user !== username);

          if (userpost && userpost.count > 0) {
            userpost.likedBy = userpost.likedBy.filter(
              (user) => user !== userId
            );
            userpost.count -= 1;
            console.log("User's post unliked, new count:", userpost.count);
          }
        }
      }
      
      
      localStorage.setItem("registeruser", JSON.stringify(state.RegisterUsers));
      localStorage.setItem("Allpost", JSON.stringify(state.Allpost));
    },

    // user comments
    UserComment: (state, action) => {
      const { postId, comment, username, userId } = action.payload;
      console.log("post", postId);
      console.log("useeeeeee", userId);

      const post = state.Allpost.find((post) => post.id === postId);

      const user = state.RegisterUsers.find((user) => user.username === userId);
      const userpost = user.Post.find((userPost) => userPost.id === postId);
      console.log("user post id found", initialState);

      console.log("findd post,,,", post);
      console.log("find user", user);

      if (userpost) {
        const commentWithUser = {
          id: nanoid(),
          text: comment,
          username: username,
        };

        post.comments.push(commentWithUser);
        localStorage.setItem("Allpost", JSON.stringify(state.Allpost));
        userpost.comments.push(commentWithUser);

        console.log("commentt witthhhh userrrrrr....", user);
        console.log("alll", state.Allpost);
        console.log("register", state.RegisterUsers);
        localStorage.setItem(
          "registeruser",
          JSON.stringify(state.RegisterUsers)
        );
      }
    },

    // delete comments on the post
    DeleteComment: (state, action) => {
      const { postId, commentId, userId, username, loginUserName } =
        action.payload;
      // find post
      const post = state.Allpost.find((post) => post.id === postId);
      // find user who is login
      const user = state.RegisterUsers.find((user) => user.id === userId);
      const userPostD = user?.Post?.find((userPost) => userPost.id === postId);
      console.log("userppppp", userPostD);
      if (post && user && username === loginUserName) {
        post.comments = post.comments.filter(
          (comment) => comment.id !== commentId
        );

        if (userPostD) {
          userPostD.comments = userPostD?.comments?.filter(
            (comment) => comment.id !== commentId
          );
        }
        localStorage.setItem("Allpost", JSON.stringify(state.Allpost));
        localStorage.setItem(
          "registeruser",
          JSON.stringify(state.RegisterUsers)
        );
      }
    },

    // userlogin

    setUserLoginData: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
});

export const {
  Adduser,
  uservideos,
  removeUserImage,
  likeVideo,
  UserComment,
  DeleteComment,
  userDeletes,
  setUserLoginData,
} = RegisterSlice.actions;
export default RegisterSlice.reducer;

// likeVideo: (state, action) => {
//   const { userId, postId } = action.payload;

//   const user = state.RegisterUsers.find((user) => user.id === userId);
//   console.log("userlike", user);

//   const post = state.Allpost.find((post) => post.id === postId);
//   console.log("postlike", post);

//   const userpost = user.Post.find((userpost) => userpost.id === postId);
//   console.log("userpostlike", userpost);

//   if (post && user) {
//     if (!post.likedBy.includes(userId)) {
//       post.count += 1;
//       post.likedBy.push(userId);

//       if (userpost) {
//         userpost.likedBy.push(userId);
//         userpost.count += 1;
//       }
//     } else if (post.count > 0) {
//       post.count -= 1;
//       post.likedBy = post.likedBy.filter((user) => user !== userId);

//       if (userpost) {
//         userpost.likedBy = userpost.likedBy.filter(
//           (user) => user !== userId
//         );
//         userpost.count -= 1;
//       }
//     }
//   }

//   localStorage.setItem("Allpost", JSON.stringify(state.Allpost));
//   localStorage.setItem("registeruser", JSON.stringify(state.RegisterUsers));
// },
