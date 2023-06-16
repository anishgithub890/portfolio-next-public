'use client';

import React, { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';

const Footer = () => {
  const date: Date = new Date();
  // const [time, setTime] = useState(new Date());

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date();
  let name = month[d.getMonth()];

  // useEffect(() => {
  //   setInterval(() => setTime(new Date()), 1000);
  // }, []);

  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center pl-6 pr-6 gap-y-6 gap-x-12 border-t mt-10 border-blue-gray-50 py-8 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        <div className="hover:text-rose-600 hover:underline hover:underline-offset-4 transition">
          &copy; {'Copyright'} {2023 + ' -'} {date.getFullYear() + ' -'}
          {name + ' -'}
          {date.getDate() + ' : Anish Mahato - All rights reserved.'}
        </div>
      </Typography>
      {/* <div className="text-blue-500 justify-center">
        <p>{time.toLocaleTimeString()}</p>
      </div> */}
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="/"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Home
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/projects"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Project
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/skills"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Skill & Others
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/contacts"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/articles"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Article
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
