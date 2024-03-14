import { NavLink, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div style={{ height: "460px" }}>
      <h2>Service Page</h2>
      <nav className="text-start">
        <NavLink className="btn btn-success m-2" to="onlinevideos">
          Online Videos
        </NavLink>
        <NavLink className="btn btn-success m-2" to="youtubevideos">
          YouTube Videos
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
