import { createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../assets/user";
import profile from "../assets/man.png";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_USER") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const getInitialState = () => {
  const savedTasks = localStorage.getItem("users");
  return savedTasks ? JSON.parse(savedTasks) : [];
};
const getUserPosts = () => {
  const savedTasks = localStorage.getItem("userpost");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const PostListProvider = ({ children }) => {
  const [postList, disptachPostList] = useReducer(
    postListReducer,
    [],
    getInitialState
  );
  const [navbarSelected, setNavbarSelected] = useState("Home");
  const [signUp, setSignUp] = useState(false);
  const [account, setAccount] = useState(false);
  const [userSession, setUserSession] = useState("zero");
  const [userPosts, setUserPosts] = useState(getUserPosts);
  const [createPost, setCreatePost] = useState(false);
  const [popup, setPopup] = useState(false)

  const navigate = useNavigate();

  const userLoggedIn = postList.filter((user) => user.email === userSession);

  const userAddPost = (name, desc, time, email) => {
    const newUserPost = [{ name, desc, time, profile, email }, ...userPosts];
    setUserPosts(newUserPost);
    setCreatePost(false);
  };

  console.log(userPosts)

  useEffect(() => {
    const savedUser = sessionStorage.getItem("loginUser");
    if (savedUser) {
      setUserSession(savedUser);
    } else {
      console.log("Please Login");
    }
  });

  useEffect(() => {
    localStorage.setItem("userpost", JSON.stringify(userPosts));
  }, [userPosts]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(postList));
  }, [postList]);

  const addPost = (firstname, last, email, password, DOB, gender) => {
    const presentUsers = postList.filter((user) => user.email === email);
    if (presentUsers.length === 0) {
      disptachPostList({
        type: "ADD_USER",
        payload: {
          firstname,
          last,
          email,
          password,
          DOB,
          gender,
        },
      });
      setSignUp(false);
    } else {
      alert("Email Already Exist");
    }
  };

  const loginUser = (email, password) => {
    postList.map((user) => {
      if (user.email === email && user.password === password) {
        setUserSession(user.email);
        sessionStorage.setItem("loginUser", user.email);
        navigate("/Main");
        console.log("user login");
      } else {
        console.log("incorrect user");
      }
    });
  };

  const deletePosts = (email, time) => {
    const newUsers = userPosts.filter((user) => user.time !== time);
    setUserPosts(newUsers);
  };

  return (
    <PostList.Provider
      value={{
        addPost,
        postList,
        loginUser,
        setNavbarSelected,
        navbarSelected,
        signUp,
        setSignUp,
        account,
        setAccount,
        userSession,
        userPosts,
        deletePosts,
        userLoggedIn,
        createPost,
        setCreatePost,
        userAddPost, popup, setPopup,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
