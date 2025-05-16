type TabProps = {
  href: string
  label: string
}

export default function Tab({ href, label }: TabProps) {
  return (
    <a href={href} className="tab-link">
      {label}
    </a>
  )
}