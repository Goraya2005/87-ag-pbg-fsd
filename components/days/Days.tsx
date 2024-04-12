
'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const eventDate = "April 20, 2024"; // Wrap the date in quotes to make it a string

function Days() {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const eventDateTime = new Date(eventDate).getTime();
      const now = new Date().getTime();
      const difference = eventDateTime - now;

      setRemainingTime(difference);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
      <div className="flex flex-col h-full p-6 bg-brown-800" data-aos="fade-up">
        <div className="event-block">
          <h5 className="h3 mb-4 text-center">Date of Upcoming Event</h5>
          <br />
          <p className="h4 mb-4 text-center">{new Date(eventDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>
      <div className="flex flex-col h-full p-6 bg-red-800" data-aos="fade-up" data-aos-delay="200">
        <h3 className="h3 mb-4 text-center">Remaining Time</h3>
        <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">
          <div className="flex flex-col w-full h-full p-6 bg-brown-800" data-aos="fade-up">
            <div className="remaining-time flex w-full justify-between">
              <div className="time-block mr-12 text-center bg-blue-900">
                <span className="value">
                  <p>{days}</p>
                  <p className="label">Days</p>
                </span>
              </div>
              <div className="time-block mr-12 text-center bg-black">
                <span className="value">
                  <p>{hours}</p>
                  <p className="label">Hours</p>
                </span>
              </div>
              <div className="time-block mr-12 text-center bg-blue-900">
                <span className="value">
                  <p>{minutes}</p>
                  <p className="label">Minutes</p>
                </span>
              </div>
              <div className="time-block mr-12 text-center bg-black">
                <span className="value">
                  <p>{seconds}</p>
                  <p className="label">Seconds</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full p-6 bg-brown-800" data-aos="fade-up">
        <div className="flex items-center justify-center mb-4">
          <div className="event-block">
            <Image src="/images/shahid-chohan.jpeg" alt="Dr. Shahid Chohan" width={120} height={120} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Days;
