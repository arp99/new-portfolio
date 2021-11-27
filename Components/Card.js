export const Card = ({
  imgSrc,
  title,
  description,
  liveLink,
  sourceLink,
  blogLink,
}) => {
  return (
    <div className="w-5/6 lg:w-3/5 xl:w-1/2 min-h-56 p-2 mt-4 transition-all duration-300 hover:scale-110 border-none bg-white shadow-2xl flex flex-col md:flex-row md:justify-around">
      <img
        className="max-h-40 md:max-h-full md:w-2/5 border-none drop-shadow-lg"
        src={imgSrc}
        alt="project picture"
      />
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <h1 className="font-bold text-xl text-pallet1-navyBlue">{title}</h1>
        <p className="text-base text-pallet1-blueGrotto">{description}</p>
        <div>
          {!blogLink && (
            <>
              <button className="p-2 bg-pallet1-blueGrotto text-white">
                <a href={liveLink} target="_blank">Live Demo</a>
              </button>
              <button className="ml-2 p-2 border border-solid border-pallet1-blueGrotto text-pallet1-blueGrotto">
                <a href={sourceLink} target="_blank">View Source</a>
              </button>
            </>
          )}
          {blogLink && (
            <button className="p-2 bg-pallet1-blueGrotto text-white">
              <a href={blogLink} target="_blank">View Blog</a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
