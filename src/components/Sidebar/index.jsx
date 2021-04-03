import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/actions";
import { NavItem } from "..";
import {
  StaffPageIcon,
  StudentsPageIcon,
  ExitIcon,
  ProductsPageIcon,
  // TamakTimeIcon,
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
        <div className="sidebar__item sidebar__logo">
          {/* <TamakTimeIcon /> */}
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
          {/* <p>{store.auth.user}</p> */}
        </div>
        <div className="sidebar__item nav__list">
          <NavItem
            name="Home"
            to={["/", "/home"]}
            link="/"
            icon={<ProductsPageIcon />}
          />
          <NavItem name="Wallets" link="/wallets" icon={<StudentsPageIcon />} />
          <NavItem
            name="Categories"
            link="/categories"
            icon={<CategoriesPageIcon />}
          />
          <NavItem name="Reports" link="/reports" icon={<StaffPageIcon />} />
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
