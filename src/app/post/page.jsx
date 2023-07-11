import Link from "next/link";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h2 className="text-[32px] font-bold">Posts</h2>
      <p className="text-[#888] text-xl">
        All the tools you need to make the Web. Faster.
      </p>
      <div className="mt-10 content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="post-box group rounded-md border border-[#333] p-4 space-y-2 hover:bg-[#333]"
          >
            <h1 className="text-[25px] font-bold">{post.title}</h1>
            <p> {post.body}</p>
            <Link href={`/post/${post.id}`}>
            <button className="border border-[#333] rounded-md px-4 py-3 group-hover:bg-white group-hover:text-black">
              Read more
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
