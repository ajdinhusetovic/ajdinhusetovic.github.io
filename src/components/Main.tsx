import image from "../assets/picture.jpeg";

const Main = () => {
  return (
    <div className="mt-20 md:mt-36 lg:mt-20 lg:flex lg:flex-col lg:w-full lg:items-center lg:justify-center">
      <div className="flex items-center justify-center xl:w-11/12">
        <img
          src={image}
          className="rounded-full w-32 h-32 md:w-56 md:h-56 lg:w-56 lg:h-56 object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-6 md:mt-12 text-green-text-color font-semibold lg:w-10/12">
        <p className="text-lg text-center md:text-xl lg:text-3xl">
          Hello, I'm Ajdin Husetovic. A passionate Software Developer.
        </p>
      </div>
    </div>
  );
};

export default Main;
