"use client";
import { useRef, useState } from "react";
import { Map, MapMarker, MapTypeControl } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";

export default function CombinedMap() {
  const myPosition = {
    lat: 37.5665,
    lng: 126.978,
  };
  const mapRef = useRef<kakao.maps.Map>(null);
  const [info, setInfo] = useState<string>("");
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  useKakaoLoader();

  const getInfo = () => {
    const map = mapRef.current;
    if (!map) return;

    const center = map.getCenter();
    const level = map.getLevel();
    const mapTypeId = map.getMapTypeId();
    const bounds = map.getBounds();
    const swLatLng = bounds.getSouthWest();
    const neLatLng = bounds.getNorthEast();

    let message = "지도 중심좌표는 위도 " + center.getLat() + ", <br>";
    message += "경도 " + center.getLng() + " 이고 <br>";
    message += "지도 레벨은 " + level + " 입니다 <br> <br>";
    message += "지도 타입은 " + mapTypeId + " 이고 <br> ";
    message += "지도의 남서쪽 좌표는 " + swLatLng.getLat() + ", " + swLatLng.getLng() + " 이고 <br>";
    message += "북동쪽 좌표는 " + neLatLng.getLat() + ", " + neLatLng.getLng() + " 입니다";
    setInfo(message);
  };

  return (
    <div className="mx-auto max-w-full mb-16 md:w-[1000px]">
      <Map
        center={myPosition}
        style={{
          height: "500px",
        }}
        level={3}
        ref={mapRef}
        onClick={(_, mouseEvent) => {
          const latlng = mouseEvent.latLng;
          setPosition({
            lat: latlng.getLat(),
            lng: latlng.getLng(),
          });
        }}
      >
        <MapMarker position={myPosition}>
          <div style={{ color: "#000", padding: "10px" }}>헬스장</div>
        </MapMarker>
        {position && <MapMarker position={position} />}
        <MapTypeControl position={"TOPRIGHT"} />
      </Map>
      <button id="getInfoBtn" className="mt-4 mb-2 font-bold text-lg" onClick={getInfo}>
        맵정보 가져오기
      </button>
      <p
        id="info"
        dangerouslySetInnerHTML={{
          __html: info,
        }}
      />
      <div id="clickLatlng">
        {position && (
          <>
            위도 : {position.lat} <br />
            경도 : {position.lng}
          </>
        )}
      </div>
    </div>
  );
}
