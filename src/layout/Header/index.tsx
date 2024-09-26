import React from "react";
import { Link } from "react-router-dom";
import { DarkmodeSwitch } from "@/components/DarkModeSwitcher";
import Logo from "@/components/Logo";
import {PageController} from "@sitecore-search/react";

const Header = () => {

  const latHandler = (e: { target: { value: any; }; }) => {
    PageController.getContext().setGeoLocationLat(Number(e.target.value));
  };

  const lonHandler = (e: { target: { value: any; }; }) => {
    PageController.getContext().setGeoLocationLon(Number(e.target.value));
  };

  return (
    <div className="header-outer">
      <div className="header-inner">
        <div>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div>
          <label>Lat</label>
          <input
              className="border-2 border-gray-300 p-2 m-2 rounded text-sm dark:bg-gray-700"
              type="number"
              defaultValue={PageController.getContext().getGeoLocationLat()}
              onChange={latHandler}
          />
          <label>Lon</label>
          <input
              className="border-2 border-gray-300 p-2 m-2 rounded text-sm dark:bg-gray-700"
              type="number"
              defaultValue={PageController.getContext().getGeoLocationLon()}
              onChange={lonHandler}
          />
        </div>
        <div className="flex items-center">
          <div className="ml-1">
            <DarkmodeSwitch/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
