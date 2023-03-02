import '../app/globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/product')
  }
  return (
    <>
      <h1>Home oo</h1>
      <Link href='/about'>
        <h1>about</h1>
      </Link>
      <Link href='/product'>
        <h1>Products</h1>
      </Link>
      <button onClick={handleClick}>Click here to purchase</button>

      <h1>sign in functionalities</h1>
      <div className='flex items-center gap-4 mt-10'>
        <button className='bg-green-500 px-2 '>Sign in</button>
        <button className='bg-red-500 px-2 '>Sign Out</button>
      </div>
    </>
  )
}

export default Home
