import { DeckGL, GeoJsonLayer } from "deck.gl";
import Map from "react-map-gl";
import type { Feature, Geometry } from "geojson";

const MAPBOX_API_KEY = import.meta.env.VITE_MAPBOX_API_KEY;

type PropertiesType = {
  name: string;
  color: string;
};

const InitialViewState = {
  latitude: 39.8283,
  longitude: -98.5795,
  zoom: 3,
  bearing: 0,
  pitch: 30,
};
const MapStyle =
  "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";

export default function Simulator() {
  // const layers = [
  //   new GeoJsonLayer({
  //     id: 'deforestationZones',
  //     data: "",
  //     filled: true,
  //     pointRadiusMinPixels: 5,
  //     pointRadiusScale: 2000,
  //     //Color using arrays and RGB values, which fucking sucks
  //     // getFillColor:: data => data.properties.Name.includes("Something") ? [0,0,0,255] : [255,255,255,255],
  //     pickable: true,
  //     autoHighlight: true,
  //     onClick
  //   })
  // ]

  const layer = new GeoJsonLayer<PropertiesType>({
    id: "GeoJsonLayer",
    data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart.geo.json",

    stroked: false,
    filled: true,
    pointType: "circle+text",
    pickable: true,

    getFillColor: [160, 160, 180, 200],
    getLineColor: (f: Feature<Geometry, PropertiesType>) => {
      const hex = f.properties.color;
      // convert to RGB
      return hex
        ? (hex.match(/[0-9a-f]{2}/g) || []).map((x) => parseInt(x, 16)) as [number, number, number, number]
        : [0, 0, 0];
    },
    getText: (f: Feature<Geometry, PropertiesType>) => f.properties.name,
    getLineWidth: 20,
    getPointRadius: 4,
    getTextSize: 12,
  });

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-y-hidden">
      <DeckGL
        height={"100%"}
        initialViewState={InitialViewState}
        controller={true}
        layers={[layer]}
      >
        <Map
          mapStyle={MapStyle}
          minZoom={1.7}
          mapboxAccessToken={MAPBOX_API_KEY}
        />
      </DeckGL>
    </div>
  );
}
