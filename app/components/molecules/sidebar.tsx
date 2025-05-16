
import Tab from "../atomes/tab"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <Tab href="/about" label="About me" />
        <Tab href="/projets" label="Projets" />
        <Tab href="/capsules" label="Capsules" />
      </nav>
    </aside>
  )
}
