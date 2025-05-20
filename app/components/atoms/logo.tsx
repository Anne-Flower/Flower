'use client'
import Image from 'next/image'
import Link from 'next/link'
import LogoV7 from '@/assets/logoV7.png'
const Logo = () => {
  return (
    <Link href="/" aria-label="Aller à la page d'accueil">
      <Image
        src={LogoV7}
        alt="Logo d'Anne-Flore Bernard"
        className="h-[120px] w-[280px] object-contain absolute top-[29px] right-[241px]"
        aria-hidden="true"
      />
    </Link>
  )
}

export default Logo
