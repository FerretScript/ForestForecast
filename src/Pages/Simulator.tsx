import { DeckGL, GeoJsonLayer } from "deck.gl";
import Map from "react-map-gl";
import { useQuery } from "react-query";
import { useRef, useState } from "react";
import { motion, useDragControls, MotionValue } from "framer-motion";
import { Info, X, GripHorizontal, ChevronRight } from "lucide-react";

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

  const [slider, setSlider] = useState(50);

  const [showModal, setShowModal] = useState(false);

  const [ showNav, setShowNav ] = useState(false);

  const ref = useRef(null);
  const dragControls = useDragControls();

  return (
    <div
      ref={ref}
      className="relative flex h-screen w-screen items-start justify-center overflow-hidden overflow-y-hidden md:justify-end"
    >
      <motion.div
        className="absolute right-4 top-4 z-40 flex  w-[25rem] flex-shrink flex-col items-center justify-center space-y-2 rounded-2xl bg-white px-5 py-3 pb-3"
        drag
        dragElastic={0.2}
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={ref}
      >
        <button
          onClick={() => setShowModal(!showModal)}
          className="pointer-events-auto flex items-center justify-between space-x-3 px-2 text-2xl font-semibold text-black"
        >
          <p>Deforestation in Jalisco</p>
          {showModal ? <Info size={24} /> : <X size={24} />}
        </button>
        {showModal && (
          <div className=" z-50 flex h-full w-full flex-col items-start justify-center space-y-2 pb-2 text-left text-black">
            <p className="">
              Reported new COVID-19 cases per 100,000 residents during the week
              of August 16, 2020
            </p>
            <label htmlFor="time" className="mb-2 block font-medium">
              Time range
            </label>
            <input
              id="time"
              type="range"
              value={slider}
              onChange={(event) => setSlider(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
            />
          </div>
        )}
        <div
          onPointerDown={(e) => {
            dragControls.start(e);
          }}
          className="pointer-events-auto flex h-5 w-full cursor-grab items-center justify-center"
          style={{ touchAction: "none" }}
        >
          <GripHorizontal size={30} className="stroke-gray-600" />
        </div>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.06 }}
        onClick={() => {
          setShowNav(!showNav);
        }}
        animate={showNav ? { x: "150%" } : { x: "0%" }}
        className="absolute left-4 top-4 z-50 flex aspect-square h-20 items-center justify-center rounded-2xl bg-white"
      >
        <ChevronRight size={80} className="stroke-black pl-1" />
      </motion.button>
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
