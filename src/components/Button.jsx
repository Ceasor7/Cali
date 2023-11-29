
const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
  
       <button
      className={` gap-2 px-7 py-4 border font-montserrat leading-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#cd2d00] hover:text-white duration-300
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-[#cd7e01] text-white border-[#cd7e01]"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
    </button>
 
   
  );
};

export default Button;
