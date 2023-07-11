"use client"
import { useRouter } from "next/navigation"

const PostItem = ({params}) => {

  return (
    <div>PostItem {params.slug}</div>
  )
}

export default PostItem