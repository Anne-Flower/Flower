const tabLinkClasses = `group relative flex items-center border-b-[2px] border-[#CCADAD]
  font-['IBM_Plex_Mono'] text-[16px] text-[#400F38]
  no-underline h-10 py-2 overflow-hidden hover:text-[#f5efef] hover:text-[18px]`;

type TabProps = {
  href: string;
  label: string;
  color: string;
};

const Tab = ({ href, label, color }: TabProps) => {
  return (
    <a href={href} className={tabLinkClasses}>
      <div
        className="absolute left-0 top-0 h-full w-[12px] transition-all duration-300 ease-in-out group-hover:w-full"
        style={{ backgroundColor: color }}
      ></div>

      <p className="pl-6 relative z-10">{label}</p>
    </a>
  );
};

export default Tab;
