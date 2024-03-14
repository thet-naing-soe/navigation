import { useParams } from "react-router-dom";

export default function LangInfo() {
  const param = useParams();
  return (
    <div style={{ height: "460px" }}>
      <h3>We provide lectures on {param.lang} language also...</h3>
    </div>
  );
}
