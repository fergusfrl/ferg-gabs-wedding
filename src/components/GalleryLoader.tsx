const GalleryLoader = () => {
  return (
    <div className="flex gap-1">
      <div className="flex-1 bg-slate-200 animate-pulse w-full h-[300px]"></div>
      <div className="hidden sm:block flex-1 bg-slate-200 animate-pulse w-full h-[300px]"></div>
      <div className="hidden lg:block flex-1 bg-slate-200 animate-pulse w-full h-[300px]"></div>
      <div className="hidden xl:block flex-1 bg-slate-200 animate-pulse w-full h-[300px]"></div>
    </div>
  );
};

export default GalleryLoader;
