import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div style={{ height: "460px" }}>
      <h2>Page not found</h2>
      <button
        className="btn btn-warning"
        onClick={() => navigate("/", { replace: true })}
      >
        Home Page
      </button>
    </div>
  );
}
