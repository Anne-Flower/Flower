import Image from 'next/image'
import logoAF from '@/assets/logoAF.jpeg'

const logo = () => {
  return (
    <Image
      src={logoAF}
      alt="Logo d'Anne-Flore Bernard"
      className="h-[114px] w-[300px] object-contain absolute top-8 right-[204px]"
      aria-hidden="true"
    />
  )
}

export default logo