import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiKey) {
    throw new Error("error");
  }

  useKakaoLoaderOrigin({
    appkey: apiKey,
    libraries: ["clusterer", "drawing", "services"],
  });
}


