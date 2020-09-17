import React from "react";
import { Menu, MenuItem } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu>
      <Link to="/">
        <MenuItem>Home</MenuItem>
      </Link>
      <Link to="/zane">
        <MenuItem>Zane</MenuItem>
      </Link>
      <Link to="/kyle">
        <MenuItem>Kyle</MenuItem>
      </Link>
      <Link to="/riley">
        <MenuItem>Riley</MenuItem>
      </Link>
      <Link to="/victor">
        <MenuItem>Victor</MenuItem>
      </Link>
      <Link to="/scott">
        <MenuItem>Scott</MenuItem>
      </Link>
    </Menu>
  );
};
export default Navbar;
