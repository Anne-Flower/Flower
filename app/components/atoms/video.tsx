import videoFile from '@/assets/medium.mp4'
const video = () => {
  return (
    <video
    src={videoFile}
    controls
    autoPlay
    loop
    muted
    className="w-full h-auto">
    </video>
  )
}

export default video