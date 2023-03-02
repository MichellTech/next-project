import { useRouter } from 'next/router'

function Product() {
  const router = useRouter()
  const productidddd = router.query.productid
  return (
    <div>
      <h1>
        this is how to create a dynamic page for product page {productidddd}
      </h1>
    </div>
  )
}
export default Product
