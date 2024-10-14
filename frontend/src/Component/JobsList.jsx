import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/jobs";

interface Post {
  id: number;
  title: string;
}

const JobsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${BASE_URL}/posts`);
      const posts = (await response.json()) as Post[];
      setPosts(posts);
    };
    fetchPosts();
  }, []);


  return (
    <div></div>
  )

}


export default JobsList;
