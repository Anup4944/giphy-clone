import { useState } from "react";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="w-8" />
          <h1 className="text-xl font-bold trackinh-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        {/* Render Categories */}

        <div className="font-bold text-md flex gap-2 items-center">
          <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
            Reactions
          </Link>
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showCategories ? "gradient" : " "
              } border-b-4 hidden lg:block`}
            />
          </button>
          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to="/favourites">Favourite GIFS</Link>
          </div>
          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span> Categories</span>
            <hr />
            <div>
              <Link className="font-bold">Reactions</Link>
            </div>
          </div>
        )}
      </div>
      {/* Search */}
    </nav>
  );
};

export default Header;
