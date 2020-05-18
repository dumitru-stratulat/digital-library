import React from 'react';
import '../App.css';
import { useTheme } from "../context/ThemeContext";
import {Link} from 'react-router-dom'

import { Switch } from 'antd';

function Nav() {
  const themeState = useTheme();
  return (
    <nav>
      <div>
        <ul className="header-nav-links">
          <Link to='/'>
            <li>Home</li>
          </Link>

          <Link to='/shelf'>
            <li>Shelf</li>
          </Link>
        </ul>
        <div className="nav-links-wrap">
          <p>Dark Mode</p>

          <Switch onChange={()=>themeState.toggle()} defaultChecked={themeState.dark} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
