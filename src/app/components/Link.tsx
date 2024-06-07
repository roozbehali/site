const Link = ({ href, children }) => {
  return (
    <a href={href} target="_blank" className="text-zinc-500 underline decoration-1 underline-offset-2 decoration-dashed hover:text-orange-200 transition duration-300">
      {children}
    </a>
  );
};

export default Link;
