import React, { useState, useEffect } from "react";
import "./App.css";
import SideMenu from "./components/sideMenu/SideMenu";
import Search from "./components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./features/coins/coinSlice";
import { fetchMarket } from "./features/market/marketSlice";
import { fetchTrending } from "./features/search/searchTrendingSlice";
import CoinList from "./components/coins/CoinList";
import MarketList from "./components/market/MarketList";
import Events from "./components/events/Events";

function App() {
  const coins = useSelector((state) => state.coins);
  const market = useSelector((state) => state.market);
  const trendings = useSelector((state) => state.trendings);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(amountAdded(3));
  };

  useEffect(() => {
    dispatch(fetchMarket());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  console.log(trendings.trending.coins);

  const [isLateralOpen, setIsLateralOpen] = useState(false);
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.innerWidth);
    window.addEventListener("resize", resizeW);

    return () => {
      window.removeEventListener("resize", resizeW);
    };
  }, []);

  return (
    <div className="flex flex-row flex-nowrap main pt-5 px-2">
      <div className="flex grow-0 shrink-0 basis-20 min-h-screen">
        <SideMenu />
      </div>
      <div className="flex grow pb-4">
        <div className="flex grow flex-col flex-nowrap">
          <Search />
          <div className="flex mob:flex-row flex-col flex-wrap mx-3">
            <div className="bar rounded-xl mb-5">
              <h1>Market Leaders</h1>
              <div className="flex justify-center px-3 py-6 m-5">
                <MarketList market={market.market} />
              </div>
            </div>

            <div className="bar rounded-xl flex mob:flex-row flex-col flex-wrap">
              <h1 className="mb-6">All Coins</h1>
              <div className="flex justify-center px-3 py-6 m-5">
                <CoinList coins={coins.coinItems} />
              </div>
            </div>

            {/* {indicators.data.map((data, index) => {
            return <DataCard key={index} {...data} />
          })} */}
          </div>
        </div>
      </div>
      <div className="flex grow-0 shrink-0 basis-20 pb-4 min-h-screen">
        <div className="bar">
          <h2>Events</h2>
          <div>
            <Events trendings={trendings.trending} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
