export const Button = ({ children, className }) => {
  return (
    <button
      className={`
            text-pallet1-navyBlue
            border 
            border-solid 
            border-pallet1-navyBlue
            w-full h-16
            flex items-center justify-evenly
            group hover:border-transparent
            relative
            cursor-pointer
            ${ className }
        `}
    >
      <span className="w-0 h-full absolute left-0 top-0 group-hover:w-full transition-all ease-out duration-300 bg-pallet1-navyBlue"></span>
      <span className="group-hover:text-pallet1-babyBlue relative flex">{children}</span>
    </button>
  );
};
