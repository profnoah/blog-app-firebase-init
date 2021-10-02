import React, { useContext, createContext, useState, useEffect } from "react";
import { firebaseDB } from "../utils/firebaseUtil";

// Creating context for global data
const BlogContext = createContext();

// Defining a method for getting context
// it returns state and dispatch
export function useBlog() {
  return useContext(BlogContext);
}

// Defining a method for BlogContext.Provider
export function BlogContextProvider({ children }) {
  const [currentBlogs, setCurrentBlogs] = useState();

  function addBlog(blogValue) {
    const blogRef = firebaseDB.ref("blogs");
    blogRef.push(blogValue);
  }

  function getOneBlog(id) {
    const result = currentBlogs?.filter((item) => item.id === id);
    return result;
  }

  function deleteOneBlog(id) {
    const contactRef = firebaseDB.ref("blogs").child(id);
    contactRef.remove();
  }

  function updateBlog(id, data) {
    const contactRef = firebaseDB.ref("blogs").child(id);
    contactRef.update(data);
  }

  useEffect(() => {
    const blogRef = firebaseDB.ref("blogs");
    blogRef.on("value", (snapshot) => {
      const blogs = snapshot.val();
      const blogL = [];
      for (let id in blogs) {
        blogL.push({ id, ...blogs[id] });
      }
      setCurrentBlogs(blogL);
    });
  }, []);

  const value = {
    addBlog,
    currentBlogs,
    getOneBlog,
    deleteOneBlog,
    updateBlog,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
