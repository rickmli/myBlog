import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { MdOutlineBook } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { LuTags } from "react-icons/lu";

function Header() {
  return (
    <header className="flex items-center gap-4 bg-emerald-300 pl-10 pr-6 text-2xl">
      <div className="flex items-center gap-6">
        <Link to="/" className="cursor-pointer">
          <FaCode size={28} />
        </Link>
        <div>RICK's BLOG</div>
        <div className="flex items-center gap-4 bg-emerald-100 py-3 pl-6 pr-8">
          <GoSearch size={24} />
          <input
            type="text"
            placeholder="search"
            className="w-60 bg-emerald-100 outline-none"
          />
        </div>
      </div>
      <nav className="ml-auto">
        <ul className="flex gap-8">
          <li>
            <Link to="/" className="navbar-item">
              <IoHomeOutline />
              Home
            </Link>
          </li>
          <li className="group relative">
            <Link to="/article" className="navbar-item">
              <RiArticleLine />
              Article
            </Link>
            <ul className="absolute hidden w-full bg-emerald-100 text-xl opacity-0 shadow-md group-hover:block group-hover:opacity-100">
              <li>
                <Link to="/" className="navbar-submenu-item">
                  <MdOutlineBook size={14} />
                  Archives
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-submenu-item">
                  <BiCategoryAlt size={14} />
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-submenu-item">
                  <LuTags size={14} />
                  Tags
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/comment" className="navbar-item">
              <FaRegCommentDots />
              Comment
            </Link>
          </li>
          <li>
            <Link to="/project" className="navbar-item">
              <MdOutlinePhotoLibrary />
              Project
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-item">
              <RxAvatar />
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
