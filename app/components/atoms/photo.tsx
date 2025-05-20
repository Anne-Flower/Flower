import Image from "next/image";
import portrait from "@/assets/portrait1.png";

const photo = () => {
  return (
    <div className="relative h-[570px] mt-44 border-[1px] border-[#f4e3f3]">
      <Image
        src={portrait}
        alt="portrait"
        fill
        className=" w-full h-full object-cover"
      />
    </div>
  )
}

export default photo