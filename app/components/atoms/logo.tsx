'use client'
import Image from 'next/image'
import Link from 'next/link'
import logoAF from '@/assets/logoAF.jpeg'

const Logo = () => {
  return (
    <Link href="/" aria-label="Aller à la page d'accueil">
      <Image
        src={logoAF}
        alt="Logo d'Anne-Flore Bernard"
        className="h-[114px] w-[300px] object-contain absolute top-8 right-[204px]"
        aria-hidden="true"
      />
    </Link>
  )
}

export default Logo
