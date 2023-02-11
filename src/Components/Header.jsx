import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ back }) => {
  return (
    <div className="header bg-gray-800 border-b py-4 border-gray-900">
      <div className="custom-maxWidth flex justify-between">
        {back && (
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                fill="currentColor"
                d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
              />
            </svg>
          </Link>
        )}
        <h1>
          {" "}
          <Link to="/">Coiner</Link>{" "}
        </h1>
        <ul className="flex justify-between gap-5">
          <li className="hover:text-gray-300 hover:underline">
            <Link to="/">Contact the Developer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
