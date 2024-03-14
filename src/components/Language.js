import { Outlet } from "react-router-dom";

export default function Language() {
  return (
    <div style={{ height: "460px" }}>
      <h2>We provide video lectures on almost All computer languages...</h2>
      <Outlet />
    </div>
  );
}
