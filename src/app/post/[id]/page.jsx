import { notFound } from "next/navigation";

const getPostById = async (id) => {

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    return notFound();
  }

  return response.json();
};

const PostItem = async ({ params }) => {

  const postData = await getPostById(params.id);

  return (
    <div>
      <div className="page-header py-5 text-center bg-slate-900 rounded-md">
        <h1 className="text-2xl font-bold">Blog</h1>
      </div>

      <div className="post-content mt-10">
        <h2 className="text-[25px] font-bold">{postData.title}</h2>
        <p> {postData.body}</p>
      </div>
    </div>
  );
};

export default PostItem;
