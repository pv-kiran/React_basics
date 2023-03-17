import { useEffect, useState } from 'react'
const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const postsRes = await fetch(url);
    const posts = await postsRes.json();
    setPosts(posts);
    setLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return {loading , posts};

}

export {useFetch};