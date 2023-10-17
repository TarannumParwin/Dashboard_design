import React, { useState } from "react";
import { FaHandsClapping } from "react-icons/fa6";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsSearch,
  BsChevronDown,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";


function Home() {
  const data = [
    {
      name: "Jan",
      pv: 4000,
    },
    {
      name: "Feb",
      uv: 3000,
    },
    {
      name: "Mar",
      uv: 2000,

      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
    },
    {
      name: "May",
      uv: 1890,
    },
    {
      name: "Jun",

      pv: 3800,
    },
    {
      name: "Jul",

      pv: 4300,
    },
    {
      name: "Aug",
      uv: 3490,
    },
    {
      name: "Sep",

      pv: 4300,
    },
    {
      name: "Oct",
      uv: 3490,
    },
    {
      name: "Nov",
      uv: 3490,
    },
    {
      name: "Dec",
      uv: 3490,
    },
  ];
  const pieChartData = [
    { name: "Category A", value: 400 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 200 },
  ];

  const searchStyle = {
    marginRight: "20px", // Adjust the margin as needed
    textAlign: "right",
  };
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = () => {
    setSelectedOption();
    setIsOpen(false);
  };

  return (
    <main className="main-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",

          backgroundColor: "#f7f7f7",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        <BsSearch
          style={{ fontSize: "20px", marginRight: "5px", color: "blue" }}
        />
        <input
          type="text"
          placeholder="Search..."
          style={{ border: "none", outline: "none" }}
        />
      </div>
      <div className="main-title">
        <h3 style={{ color: "blue" }}>
          Hello Sharukh
          <FaHandsClapping className="card_icon" />
        </h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Earnings</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Orders</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Balance</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total sales</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,

              bottom: 5,
            }}
          >
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              dataKey="value"
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      
       
      
        
      </div>
    </main>
  );
}

export default Home;
