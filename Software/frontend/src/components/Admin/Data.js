import React from "react";
import {FaBoxOpen, FaMoneyBillTransfer, FaMoneyCheckDollar} from "react-icons/fa6";

export const CardsData = [
    {
        title: "Product Sold",
        color:{
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: "200",
        png: FaBoxOpen
    },
    {
        title: "Revenue",
        color:{
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7"
        },
        barValue: 80,
        value: "10000",
        png: FaMoneyBillTransfer
    },
    {
        title: "Expenses",
        color:{
            backGround: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255,202,113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B"
        },
        barValue: 70,
        value: "20000",
        png: FaMoneyCheckDollar
    }

]