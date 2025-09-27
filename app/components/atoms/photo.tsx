'use client'

import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative h-[136px] w-[130px] border border-[#f4e3f3]">
      <Image
        src="/assets/portrait-test.png"
        alt="portrait d'Anne-Flore Bernard"
        fill
        sizes="(max-width: 768px) 120px, 120px"
        className="object-cover"
      />
    </div>
  )
}

export default Photo
