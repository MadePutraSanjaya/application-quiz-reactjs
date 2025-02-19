import { Link } from "react-router-dom";
import { BannerProps } from "../../../interface/banner.type";

const Banner = ({ title, description, style, className }: BannerProps) => {
  return (
    <div className={`hero min-h-screen ${className}`} style={style}>
      <div className="hero-content text-center">
        <div className="w-full md:w-3/5 space-y-6">
          {title && (
            <h2 className="font-semibold heroHeadText relative z-10">
              {title}
              <img
                src="./home-decoration.png"
                className="absolute -top-8 sm:-top-16 right-10 sm:-right-6 -z-10 w-12 sm:w-24"
                alt="Decoration"
              />
              <div className="h-5 bg-primary absolute right-8 -z-10 bottom-4 w-[10rem] md:w-[24rem]"></div>
            </h2>
          )}
          {description && (
            <>
              <p className="heroP text-gray">{description}</p>
              <Link to="/login" className="btn bg-secondary">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
