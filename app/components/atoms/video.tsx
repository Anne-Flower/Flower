const video = () => {
  return (
    <video
    controls
    autoPlay
    loop
    muted
    className="h-[460px] w-full mt-44 pl-[226px] ">
      <source src="@/assets/video/medium.mp4" type="video/mp4" />
      <track
        src="@/assets/video/medium.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
    </video>
  )
}

export default video