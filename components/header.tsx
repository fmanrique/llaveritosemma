import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <Link href="/" className="hover:underline">
        <Image 
          src="/assets/llaveritos-page-logo.jpeg"
          width={200}
          height={169}
          alt="Lleveritos Emma"
          style={{
            margin: "auto",
          }}
        />
      </Link>
    </>
  )
}

export default Header
