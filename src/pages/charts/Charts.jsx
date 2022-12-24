import React, { useState, useEffect } from "react";
import LineCharts from "../../components/charts/LineCharts";
import DatePicker from "../../components/datePicker/DatePicker";
import Layout from "../../components/layout/Layout";
import Search from "../../components/search/Search";
import github from "../../assets/github.svg";
import reddit from "../../assets/reddit.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRate } from "../../features/exchange/rateSlice";

import "./charts.scss";
import { fetchDerivative } from "../../features/exchange/derivativeSlice";

const Charts = () => {
  const [sellSelected, setSellSelected] = useState("btc");
  const [buySelected, setBuySelected] = useState("");
  const [sellPrice, setSellPrice] = useState("1");
  const [buyPrice, setBuyPrice] = useState("13.769");

  const rates = useSelector((state) => state.rates);
  const derivatives = useSelector((state) => state.derivatives);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRate());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDerivative());
  }, [dispatch]);

  const changeSellSelectHandler = (event) => {
    setSellSelected(event.target.value);
    setSellPrice(
      Object.values(rates.rates.rates)
        .filter((rate) => rate.unit == event.target.value.toUpperCase())
        .map((nam) => nam.value)
    );
  };

  const changeBuySelectHandler = (event) => {
    setBuySelected(event.target.value);
    setBuyPrice(
      Object.values(rates.rates.rates)
        .filter((rate) => rate.unit == event.target.value.toUpperCase())
        .map((nam) => nam.value)
    );
  };

  // console.log(
  //   Object.values(rates.rates.rates)
  //     .filter((rate) => rate.unit == "BTC")
  //     .map((nam) => nam.value)
  // );

  console.log(sellPrice.toString());

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row w-full pt-7">
        <div className="flex grow pb-4 pt-5 flex-col sm:flex-row">
          <div className="flex grow flex-col flex-nowrap mob:flex-wrap">
            <div className="flex gap-8">
              <Search />
              <DatePicker />
            </div>
            {/* Chart */}
            <div className="bar rounded-xl mb-5 flex mob:flex-row flex-col flex-wrap mx-3">
              <h1 className="p-6">$29,800.65</h1>
              <div className="flex px-6 h-80">
                {derivatives.loading && <div>Loading...</div>}
                {!derivatives.loading && derivatives.error ? (
                  <div> Error: {derivatives.error}</div>
                ) : null}
                <LineCharts derivatives={derivatives} />
              </div>
            </div>
            {/* Exchange */}
            <div className="mb-5 flex flex-col sm:flex-row  mob:flex-row mx-3 gap-3">
              <div className="p-6 bar rounded-xl  flex grow flex-col shrink-0 ">
                <h1 className="mb-5">Exchange</h1>
                <div className="flex justify-between mb-6">
                  <div className="flex gap-4">
                    <p>Sell</p>
                    <p>{sellPrice.toString()}</p>
                  </div>
                  {rates.loading && <div>Loading...</div>}
                  {!rates.loading && rates.error ? (
                    <div> Error: {rates.error}</div>
                  ) : null}
                  <select onChange={changeSellSelectHandler}>
                    {!rates.loading && rates.rates.length != 0
                      ? Object.keys(rates.rates.rates)
                          .filter((rate) => rate != buySelected)
                          .map((rate, i) => (
                            <option key={i} value={rate}>
                              {rate.toUpperCase()}
                            </option>
                          ))
                      : null}
                  </select>
                </div>

                <div className="flex justify-between mb-6">
                  <div className="flex gap-4">
                    <p>Buy</p>
                    <p>{buyPrice.toString()}</p>
                  </div>
                  {rates.loading && <div>Loading...</div>}
                  {!rates.loading && rates.error ? (
                    <div> Error: {rates.error}</div>
                  ) : null}
                  <select onChange={changeBuySelectHandler}>
                    {!rates.loading && rates.rates.length != 0
                      ? Object.keys(rates.rates.rates)
                          .filter((rate) => rate != sellSelected)
                          .map((rate, i) => (
                            <option key={i} value={rate}>
                              {rate.toUpperCase()}
                            </option>
                          ))
                      : null}
                  </select>
                </div>

                <div className="flex justify-between items-center">
                  <p>1 BTC = 8343,44 USD</p>
                  <button className="flex gap-3" style={{ color: "white" }}>
                    Exchange
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="bar rounded-xl flex grow flex-col shrink-0 text-center">
                <p className="p-6">Alexa Rank</p>
                <p>9440</p>
              </div>
            </div>
          </div>
        </div>
        {/* INFO CARD */}
        <div className="flex grow-0 flex-col shrink-0 min-h-screen pt-5 mx-3 mb-4 bar rounded-xl">
          <h2 className="p-6 pb-3">Info Card</h2>
          <div className="flex flex-col px-5 description rounded-xl mb-5">
            <h2 className="pb-3">Description:</h2>
            <p className="py-2 px-2"></p>
          </div>
          <div className="flex flew-row gap-4 mx-3 mb-5">
            <div className="m-3 p-3 badge rounded-md flex gap-2">
              <p>Website</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <img src={reddit} alt="reddit" width={24} height={24} />
            <img src={github} alt="github" width={24} height={24} />
          </div>
          <div className="px-6">
            <h2 className="mb-4">Facts</h2>
            <hr className="mb-2" />
            <div className="flex justify-between gap-3 mb-8 mt-3">
              <p>Hashing Algorithm</p>
              <p>SHA-256</p>
            </div>
            <div className="flex justify-between gap-3 mb-8">
              <p>Country Origin</p>
              <p>Unknown</p>
            </div>
            <div className="flex justify-between gap-3 mb-8">
              <p>Category</p>
              <p>Crytocurrency</p>
            </div>

            <div className="flex flex-col px-5 description rounded-xl mb-5 pb-9">
              <div className="flex justify-between py-3">
                <p>Total Supply</p>
                <p>21000000</p>
              </div>
              <div className="flex justify-between py-3">
                <p>Max Supply</p>
                <p>21000000</p>
              </div>
              <div className="flex justify-between py-3">
                <p>Circulating</p>
                <p>21000000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Charts;
