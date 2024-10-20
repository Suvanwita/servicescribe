import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppointmentScheduling1 = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`}></div>);
    }

    for (let i = 1; i <= lastDate; i++) {
      const currentDay = new Date(year, month, i);
      const isInRange =
        startDate &&
        endDate &&
        currentDay >= startDate &&
        currentDay <= endDate;
      const isStart = startDate && currentDay.getTime() === startDate.getTime();
      const isEnd = endDate && currentDay.getTime() === endDate.getTime();

      days.push(
        <Link to="/booking/calender/elec">
        <div
          key={i}
          className={`p-2 rounded-full cursor-pointer text-black ${isInRange ? "bg-blue-100" : ""} ${isStart || isEnd ? "border border-blue-500" : ""}`}
          onClick={() => handleDayClick(currentDay)}
        >
          {i}
        </div>
        </Link>
      );
    }
    return days;
  };

  const handleDayClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (day < startDate) {
      setStartDate(day);
    } else {
      setEndDate(day);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="bg-white text-gray-800">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center"></div>
        <div className="text-sm">
          <span>English (English)</span>
          <i className="fas fa-chevron-down ml-1"></i>
        </div>
      </div>
      <div className="flex p-4">
        <div className="w-1/4">
          <div className="flex items-center mb-4">
            <i className="fas fa-briefcase text-xl mr-2"></i>
            <div>
              <div className="font-medium">REQUIREMENT UNDERSTANDING</div>
              <div className="text-sm text-gray-500">20m</div>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-calendar-alt text-xl mr-2"></i>
            <div className="text-gray-500">SELECT DATE & TIME</div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex items-center mb-4">
            <FaArrowLeft className="text-3xl" onClick={handlePrevMonth} />
            <div className="font-medium">SELECT A DATE & TIME</div>
            <FaArrowRight className="text-3xl" onClick={handleNextMonth} />
          </div>
          <div className="text-center relative">
            <div className="font-medium text-lg mb-2">{`${currentDate.toLocaleString("default", { month: "long" })} ${currentDate.getFullYear()}`}</div>
            <div className="grid grid-cols-7 gap-2 text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 gap-2 mt-2">
              {renderCalendar()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentScheduling1;
