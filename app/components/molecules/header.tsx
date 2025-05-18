import Logo from "../atoms/logo"
import Name from "../atoms/name"

const header = () => {
  return (
    <header className="flex items-center justify-left overflow-y-hidden" id="site-title">
      <Logo/>
      <Name/> 
    </header>
  )
}

export default header