import Link from 'next/link'
function Postlist({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h1>
                {post.id}, {post.title}
              </h1>
            </Link>

            <hr />
          </div>
        )
      })}
    </>
  )
}
export default Postlist

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      posts: data.slice(0, 10),
    },
    revalidate: 30,
  }
}
