'use client'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/" aria-label="Aller à la page d'accueil">
      <Image
        src="/assets/logoAF.png"
        alt="Logo d'Anne-Flore Bernard"
        width={196}
        height={108}
        className="object-contain absolute top-[29px] right-[256px]"
        aria-hidden="true"
      />
    </Link>
  )
}

export default Logo
