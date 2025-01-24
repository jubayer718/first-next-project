import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query; // URL থেকে id বের করবো
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      // ব্লগ পোস্টের ডেটা ফেচ করা
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) return <div>লোড হচ্ছে...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
