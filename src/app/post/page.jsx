const getPosts = async () => {
  const response = await fetch();
  return await response.json();
}


const Blog = () => {
  return (
    <div>This is blog page</div>
  )
}

export default Blog;