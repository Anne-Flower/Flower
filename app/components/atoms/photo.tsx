import Image from "next/image";
import portrait from "@/assets/portrait1.png";

const photo = () => {
  return (
    <div className="relative h-[460px] mt-44 ">
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