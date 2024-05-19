import { DeckGL, GeoJsonLayer } from "deck.gl";
import Map from "react-map-gl";
import { useQuery } from "react-query";
import { PointerEvent, useRef, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { Info, X, GripHorizontal } from "lucide-react";

const api = "https://4998-200-36-251-141.ngrok-free.app/polygon";

const MAPBOX_API_KEY = import.meta.env.VITE_MAPBOX_API_KEY;

const InitialViewState = {
  latitude: 39.8283,
  longitude: -98.5795,
  zoom: 3,
  bearing: 0,
  pitch: 30,
};

const MapStyle = "mapbox://styles/mapbox/satellite-streets-v12";

export default function Simulator() {
  const fetchPolygon = async () => {
    const res = await fetch(api, {
      headers: {
        "ngrok-skip-browser-warning": "any_value",
      },
    });
    const text = await res.text(); // get response text
    return JSON.parse(text); // parse text as JSON
  };

  const { data } = useQuery("users", fetchPolygon);

  const layer = new GeoJsonLayer({
    data: data,
    opacity: 0.8,
    stroked: false,
    filled: true,
    extruded: true,
    wireframe: true,
    getFillColor: [0, 0, 255],
    getLineColor: [255, 255, 255],
    pickable: true,
  });

  const ref = useRef(null);

  const [show, setShow] = useState(false);

  const dragControls = useDragControls();

  function startDrag(event: PointerEvent<Element> | PointerEvent) {
    dragControls.start(event, { snapToCursor: true });
  }

  const [slider, setSlider] = useState(50);

  return (
    <div
      ref={ref}
      className="relative flex h-screen w-screen items-start justify-center overflow-y-hidden md:justify-end"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="pointer-events-none z-40 mt-4 flex  w-[25rem] flex-shrink flex-col items-center justify-center space-y-2 rounded-2xl bg-white px-5 py-3 pb-3 active:cursor-grabbing md:mr-4"
        drag
        dragConstraints={ref}
        dragElastic={0.05}
        dragMomentum={false}
        dragListener={false}
      >
        <button
          onClick={() => setShow(!show)}
          className="pointer-events-auto flex items-center justify-between space-x-3 px-2 text-2xl font-semibold text-black"
        >
          <p>Deforestation in Jalisco</p>
          {show ? <Info size={24} /> : <X size={24} />}
        </button>
        {show && (
          <div className="pointer-events-auto z-50 flex h-full w-full flex-col items-start justify-center space-y-2 pb-2 text-left text-black">
            <p className="">
              Reported new COVID-19 cases per 100,000 residents during the week
              of August 16, 2020
            </p>
            <label htmlFor="default-range" className="mb-2 block font-medium">
              Default range
            </label>
            <input
              id="default-range"
              type="range"
              value={slider}
              onChange={(event) => setSlider(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
            />
          </div>
        )}
        <div
          onPointerDown={startDrag}
          className="pointer-events-auto flex h-5 w-full cursor-grab items-center justify-center active:cursor-grabbing"
        >
          <GripHorizontal size={30} className="stroke-gray-600" />
        </div>
      </motion.div>
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
