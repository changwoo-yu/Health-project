"use client";
import { Map, MapMarker, Roadview, RoadviewMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";
export default function BasicMap() {
  const myPosition = {
    lat: 37.5665,
    lng: 126.978,
  };
  useKakaoLoader();

  return (
    <>
      <Map
        center={{
          lat: 37.5665,
          lng: 126.978,
        }}
        style={{
          width: "100%",
          height: "500px",
        }}
        level={3}
      >
        <MapMarker position={myPosition}>
          <div style={{ color: "#000", padding: "10px" }}>헬스장</div>
        </MapMarker>
      </Map>
    </>
  );
}
