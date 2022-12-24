import React, { useState, useEffect } from "react";
import Search from "../../components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/coins/coinSlice";
import { fetchMarket } from "../../features/market/marketSlice";
import { fetchTrending } from "../../features/search/searchTrendingSlice";
import CoinList from "../../components/coins/CoinList";
import MarketList from "../../components/market/MarketList";
import Events from "../../components/events/Events";
import Layout from "../../components/layout/Layout";

const Dashboard = () => {
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

  // console.log(trendings.trending.coins);

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
    <Layout>
      <div className="flex grow pb-4 pt-5">
        <div className="flex grow flex-col flex-nowrap mob:flex-wrap">
          <Search />
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="mb-5">
              <div className="bar rounded-xl mb-5 flex mob:flex-row flex-col flex-wrap mx-3 py-5">
                <h1 className="p-6">Market Leaders</h1>
                <div className="flex justify-center px-6 overflow-x-hidden h-80">
                  <MarketList market={market} />
                </div>

                {/* {indicators.data.map((data, index) => {
            return <DataCard key={index} {...data} />
          })} */}
              </div>
              <div className="bar rounded-xl flex mob:flex-row flex-col flex-wrap mx-3">
                <h1 className="p-6">All Coins</h1>
                <div className="flex justify-center px-3 m-6 overflow-x-hidden h-24">
                  <CoinList coins={coins} />
                </div>
              </div>
            </div>
            <div className="flex grow-0 shrink-0 basis-20 pb-4 mx-3 h-4/5">
              <div className="bar rounded-xl">
                <h2 className="p-6 pb-3">Events</h2>
                <div className="overflow-x-hidden h-4/5 py-5">
                  <Events trendings={trendings} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
