import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/actions";
import { NavItem } from "..";
import {
  ReportsPageIcon,
  WalletsPageIcon,
  ExitIcon,
  HomePageIcon,
  Logo46,
  CategoriesPageIcon,
} from "../icons";
import "./styles.scss";

export default function Sidebar() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const localUser = localStorage.getItem("user");

    if (localUser) {
      setUser(JSON.parse(localUser));
      console.log(JSON.parse(localUser));
    }
  }, []);
  const handleLogout = () => {
    dispatch(logout());
  };

  // const store = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__item sidebar__header">
          <div className="sidebar__logo">
            <Logo46 />
          </div>
          <div className="sidebar__user-info">
            <div className="sidebar__user-info__full-name">
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div className="sidebar__user-info__email">
              <p>{user.email}</p>
            </div>
          </div>
        </div>
        <div className="sidebar__item nav__list">
          <NavItem
            name="Home"
            to={["/", "/home", "/money-operations"]}
            link="/"
            icon={<HomePageIcon />}
          />
          <NavItem name="Wallets" link="/wallets" icon={<WalletsPageIcon />} />
          <NavItem
            name="Categories"
            link="/categories"
            icon={<CategoriesPageIcon />}
          />
          <NavItem name="Reports" link="/reports" icon={<ReportsPageIcon />} />
        </div>
        <div className="sidebar__item sidebar__exit">
          <button
            id="logoutButton"
            className="nav_item_inner"
            onClick={handleLogout}
          >
            <ExitIcon />
            <p>Exit</p>
          </button>
        </div>
      </div>
    </div>
  );
}
