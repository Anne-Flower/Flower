import Image from "next/image";

const photo = () => {
  return (
    <div className="relative h-[570px] mt-44 border-[1px] border-[#f4e3f3]">
      <Image
        src={"/assets/portrait1.png"}
        alt="portrait"
        fill
        className=" w-full h-full object-cover"
      />
    </div>
  )
}

export default photo