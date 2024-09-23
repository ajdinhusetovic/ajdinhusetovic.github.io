import image from "../assets/picture.jpeg";

const Main = () => {
  return (
    <div className="mt-24 md:mt-28 lg:mt-64 lg:flex">
      <div className="flex items-center justify-center lg:w-[50%]">
        <img
          src={image}
          className="rounded-full w-32 h-32 md:w-56 md:h-56 lg:w-80 lg:h-80 object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-6 md:mt-12 text-black lg:w-[50%]">
        <p className="text-md text-center md:text-xl lg:text-3xl">
          Hello, I'm Ajdin Husetovic. A passionate Software Developer.
        </p>
      </div>
    </div>
  );
};

export default Main;
