export default function SocialLink({ address, icon }) {
  return (
    <a
      href={address}
      className="group cursor-pointer w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
