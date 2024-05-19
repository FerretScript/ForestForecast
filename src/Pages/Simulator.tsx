import { DeckGL, HeatmapLayer } from "deck.gl";
import Map from "react-map-gl";
import { useEffect, useRef, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { Info, X, GripHorizontal } from "lucide-react";
import FloatingNav from "../Components/FloatingNav";
import { useQuery } from "react-query";
import axios from "axios";

const api = "https://forestforecastbe.onrender.com";

const MAPBOX_API_KEY = import.meta.env.VITE_MAPBOX_API_KEY;

const InitialViewState = {
  latitude: 20.671779,
  longitude: -103.348609,
  zoom: 5,
  bearing: 0,
  pitch: 30,
};

export default function Simulator() {
  // const [slider, setSlider] = useState(50);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const dragControls = useDragControls();

  function useImage(url: string) {
    return useQuery(
      ["image", url],
      async () => {
        const response = await axios.get(url, { responseType: "blob" });
        const blob = response.data;
        const imageUrl = URL.createObjectURL(blob);
        console.log(imageUrl);
        return imageUrl;
      },
      {
        staleTime: Infinity, // This will make the fetched data never stale
        cacheTime: Infinity, // This will not remove the data from the cache until the cache itself is garbage collected
      },
    );
  }

  const { data: imageUrl, status } = useImage(
    "https://forestforecastbe.onrender.com/assets/qr.jpg",
  );

  const [layer, setLayer] = useState<HeatmapLayer>();
  const [heatMapData, setHeatMapData] = useState();

  useEffect(() => {
    const fetchHeatMapChunk = async (url: string) => {
      const res = await fetch(url)
        .then((res) => res.json())
        .catch((err) => console.error(err));
      return res;
    };

    const fetchData = async () => {
      try {
        const data = await fetchHeatMapChunk(`${api}/data`);
        setHeatMapData(data); 
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (heatMapData) {
      setLayer(
        new HeatmapLayer({
          id: "HeatmapLayer",
          data: heatMapData,
          aggregation: "SUM",
          getPosition: (d) => d.coordinates,
          getWeight: (d) => d.brightness,
          radiusPixels: 25,
        }),
      );
    }
  }, [status, imageUrl, heatMapData]);

  return (
    <div
      ref={ref}
      className="relative flex h-screen w-screen items-start justify-center overflow-hidden overflow-y-hidden md:justify-end"
    >
      <motion.div
        className="absolute right-4 top-4 z-40 flex w-[25rem] flex-col items-center justify-center space-y-2 rounded-2xl bg-white px-5 py-3 pb-3 md:max-w-screen-lg"
        drag
        dragElastic={0.2}
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={ref}
      >
        <button
          onClick={() => setShowModal(!showModal)}
          className="pointer-events-auto flex w-full items-center justify-between space-x-3 px-2 text-2xl font-semibold text-black"
        >
          <p>Datos de deforestacion</p>
          {!showModal ? <Info size={24} /> : <X size={24} />}
        </button>
        {showModal && (
          <div className=" z-50 flex h-full w-full flex-col items-start justify-center space-y-2 pb-2 text-left text-black">
            <p className="">
              Zonas de deforestacion y/o erosion vegetal
              (Detecciones y predicciones son ~85% certeras)
            </p>
            <img
              className="h-2 w-full"
              src="https://deck.gl/images/colorbrewer_YlOrRd_6.png"
              alt="color-brewer"
            />
            <div className="flex h-fit w-full place-items-center justify-between">
              <p>Menos</p>
              <p>Mas</p>
            </div>
            {/* <label htmlFor="time" className="mb-2 block font-medium">
              Time range
            </label>
            <input
              id="time"
              type="range"
              value={slider}
              onChange={(event) => setSlider(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
            /> */}
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
      <FloatingNav />
      <DeckGL
        height={"100%"}
        initialViewState={InitialViewState}
        controller={true}
        layers={[layer]}
      >
        <Map
          mapStyle={"mapbox://styles/mapbox/satellite-streets-v12"}
          minZoom={1.7}
          mapboxAccessToken={MAPBOX_API_KEY}
        />
      </DeckGL>
    </div>
  );
}
