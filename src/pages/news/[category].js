function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>Showing news for category "{category}"</h1>
      {articles.length < 2 ? (
        articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>
                {article.id} {article.title}
              </h2>
              <p>{article.description}</p>
              <hr />
            </div>
          )
        })
      ) : (
        <div>
          <h2>
            {articles.id} {articles.title}
          </h2>
          <p>{articles.description}</p>
          <hr />
        </div>
      )}
    </>
  )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
  const { params } = context
  const { category } = params
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${category}`
  )
  const data = await response.json()
  return {
    props: {
      articles: data,
      category,
    },
  }
}
