import { FC, useState , useEffect } from "react"
import PostCard from "../postCard/PostCard"
import { PostProps } from "../../types/types"




const fetchPost = async() => {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  if(!response.ok){
    throw new Error ("Something went Wrong")
  }
  return response.json()

}

const PostList:FC  = () => {

  const [data , setData] = useState<PostProps[]>([])

  useEffect(() => {

  const fetchData = async () => {
    try{
      const res = await fetchPost()
      setData(res);
    } catch(err){
      console.log(err);
    } }
    fetchData();

}, [])



  return (
    <div className="postList">
      <div className="post-container">
      {data?.map((post) => 
      <PostCard key={post.id} {...post} />
      )}
    {/* <PostCard title="mahmoud" body="post_description" /> */}
    </div>
    </div>
  )
}

export default PostList
