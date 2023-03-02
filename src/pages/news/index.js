import Link from 'next/link'
function NewsPosts({ articles }) {
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            {/* <Link href={`posts/${post.id}`}></Link> */}
            <h1>
              {article.id} || {article.title}
            </h1>
            <hr />
          </div>
        )
      })}
    </>
  )
}
export default NewsPosts

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      articles: data,
    },
  }
}
