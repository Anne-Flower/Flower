import Logo from "./components/atoms/logo";

export default function Home() {
  return (
    <main className="flex items-center justify-left">
        <h1 className="flex">
          <div className="h-30 pr-2"><Logo/></div>
          <div>
            <span>ANNE-</span>
            <span>FLORE</span>
            <span>BERNARD</span>
          </div>
      </h1>
    </main>
  )
}
