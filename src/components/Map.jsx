import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lat");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h2>
        Postion : {lat} , {lng}
      </h2>
      <button onClick={() => setSearchParams({ lat: 20, lng: 85 })}>
        Set Postion
      </button>
    </div>
  );
}

export default Map;
