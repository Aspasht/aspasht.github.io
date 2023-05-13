import React, { createContext, useState, useEffect } from "react";
import axios from "axios";



interface PostsCtxState {
  posts: object[]|null;
  setPosts:(posts:object[])=>void
}



export const PostContext = createContext<PostsCtxState>({posts:[],setPosts:()=>{}});

export const PostContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<object[] |null>(null);
  

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    const base_url = 'https://djangoapi-production-7681.up.railway.app'
    try {
      const response = await axios.get(`${base_url}/api`);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <PostContext.Provider value={{ posts, setPosts}}>
      {children}
    </PostContext.Provider>
  );
};