import { PostCard } from './components/PostCard';

export const Posts = ({posts}) =>(
    <div className='posts'>
    {posts.map(post =>(
      <PostCard
      /* post={post} */
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    )
    )}
     </div>
)