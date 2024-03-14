import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <div style={{ height: "460px" }}>
      <h2>About Us Page</h2>
      <button
        onClick={() => navigate("/", { replace: true })}
        className="btn btn-primary"
      >
        Go Back
      </button>
    </div>
  );
}
