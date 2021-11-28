import React, { Fragment, useEffect, useState } from "react";
import PrayCard from "../components/PrayCard";

import "../assets/css/pray.css";
import axios from "axios";

export default function Pray() {
   const [prayTime, setprayTime] = useState({})
   const [city, setCity] = useState('')
   const [timeZone, setTimeZone] = useState("")

   useEffect(() => {
      axios.get('https://api.pray.zone/v2/times/today.json?city=semarang').then((res) => {
         setprayTime(res.data.results.datetime[0].times)
         setCity(res.data.results.location.city)
         setTimeZone(res.data.results.location.timezone)
      })
   },[])

	const time = [
		{
			id: "0",
			title: "Subuh",
			time: prayTime.Fajr,
		},
		{
			id: "0",
			title: "Dhuhur",
			time: prayTime.Dhuhr,
		},
		{
			id: "0",
			title: "Ashar",
			time: prayTime.Asr,
		},
		{
			id: "0",
			title: "Maghrib",
			time: prayTime.Maghrib,
		},
		{
			id: "0",
			title: "Isya",
			time: prayTime.Isha,
		},
	];

	return (
		<div id="main">
         <div id="pray-head">
            <h1>Waktu Shalat</h1>
            <div  div id="city">
               <h1>{city}</h1>
               <h2>{timeZone}</h2>
            </div>
         </div>
         
			{time.map((data) => (
				<Fragment key={data.id}>
					<PrayCard title={data.title} time={data.time} />
				</Fragment>
			))}
		</div>
	);
}
