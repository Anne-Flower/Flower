import Image from 'next/image'
import logoAF from '@/assets/logoAF.jpeg'

const logo = () => {
  return (
    <Image
      src={logoAF}
      alt="Logo d'Anne-Flore Bernard"
      className="h-full w-full object-contain"
    />
  )
}

export default logo