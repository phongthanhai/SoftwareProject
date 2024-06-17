import React, { useEffect, useState } from "react";
import api from "../../../api/axiosConfig.jsx";
import "./Cards.css";
import Card from "../Card/Card";
import Loader from "../../Loader/Loader.jsx";
import { FaBoxOpen, FaMoneyBillTransfer, FaMoneyCheckDollar } from "react-icons/fa6";

const Cards = () => {
    const [storeData, setStoreData] = useState({
        productSold: 0,
        revenue: 0,
        expenses: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStoreData = async () => {
            try {
                const response = await api.get("/admin/store", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setStoreData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching store data:", error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchStoreData();
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <Loader />
            </div>
        );
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="Cards">
            <div className="parentContainer">
                <Card
                    title="Product Sold"
                    color={{
                        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
                        boxShadow: "0px 10px 20px 0px #e0c6f5",
                    }}
                    value={storeData.productSold}
                    png={FaBoxOpen}
                />
            </div>
            <div className="parentContainer">
                <Card
                    title="Revenue"
                    color={{
                        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
                        boxShadow: "0px 10px 20px 0px #FDC0C7",
                    }}
                    value={storeData.revenue}
                    png={FaMoneyBillTransfer}
                />
            </div>
            <div className="parentContainer">
                <Card
                    title="Expenses"
                    color={{
                        backGround: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255,202,113) -46.42%)",
                        boxShadow: "0px 10px 20px 0px #F9D59B",
                    }}
                    value={storeData.expenses}
                    png={FaMoneyCheckDollar}
                />
            </div>
        </div>
    );
};

export default Cards;
