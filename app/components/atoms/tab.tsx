const tabLinkClasses = `group relative flex items-center
  font-['IBM_Plex_Mono'] text-[16px] text-[#400F38]
  no-underline h-10 py-2 overflow-hidden hover:text-[#f5efef] hover:text-[16px]`;

type TabProps = {
  href: string;
  label: string;
  color: string;
};

const Tab = ({ href, label, color }: TabProps) => {
  return (
    <a href={href} className={tabLinkClasses}>
      <div
        className="absolute left-0 top-0 h-[38px] w-[12px] transition-all duration-300 ease-in-out group-hover:w-full"
        style={{ backgroundColor: color }}
      ></div>

      <p className="pl-6 relative z-10 transition-transform group-hover:translate-x-6 duration-300 ease-in-out">{label}</p>
    </a>
  );
};

export default Tab;
