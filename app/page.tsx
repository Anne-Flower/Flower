import Logo from "./components/atoms/logo";
import Name from "./components/atoms/name";
import Video from "./components/atoms/video";

export default function Home() {
  return (
    <main className="flex w-full"
    role="main"
      aria-label="Section d'accueil avec logo et nom">
        <header className="flex items-center justify-left" id="site-title">
          <Logo/>
          <Name/> 
        </header>
        <div className="w-[1176px]">
          <Video/>
        </div>
        <div>
        <p className="font-['IBM_Plex_Mono'] text-[20px] absolute bottom-16 right-30 text-[#664060] leading-[26px] tracking-wide">
        <span className="block">Full Stack</span>
        <span className="block"> developper creative</span>
        </p>
        </div>
    </main>
  )
}
