import React,{useState} from "react";
import {
  slice, concat, 
} from 'lodash';
import styles from "./styles.module.css";
import RideCompo from "../RideCompo";

const RideHistory = () => {
  const DATA=[{
    date:"01-01-2022",
    pickUp:"Tea point",
    rideTime:"20min"
  },{
    date:"04-01-2022",
    pickUp:"NIT Gate",
    rideTime:"21min"
  },{
    date:"06-01-2022",
    pickUp:"BH-4",
    rideTime:"22min"
  },{
    date:"08-01-2022",
    pickUp:"Library",
    rideTime:"24min"
  },{
    date:"09-01-2022",
    pickUp:"NIT Gate",
    rideTime:"80min"
  },{
    date:"06-01-2022",
    pickUp:"Library",
    rideTime:"02min"
  },{
    date:"04-01-2022",
    pickUp:"NIT Gate",
    rideTime:"21min"
  },{
    date:"06-01-2022",
    pickUp:"BH-4",
    rideTime:"22min"
  },{
    date:"08-01-2022",
    pickUp:"Library",
    rideTime:"24min"
  },{
    date:"09-01-2022",
    pickUp:"NIT Gate",
    rideTime:"80min"
  },{
    date:"06-01-2022",
    pickUp:"Library",
    rideTime:"02min"
  },]
  const LIMIT =3;
  const LENGTH = DATA.length;
  const [showMore,setShowMore] = useState(true);
  const [list,setList] = useState(slice( DATA,0, LIMIT));
  const [index,setIndex] = useState(LIMIT);

  const loadMore = () =>{
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }
  return (
    <div className={styles.outer}>
      <div className={styles.heading}>
        <h3> Ride History </h3>
      </div>
      {list.map((e)=><RideCompo date={e.date} pickUp={e.pickUp} rideTime={e.rideTime} />)}
      {showMore && <button onClick={loadMore} className={styles.btn}>  More... </button>}
    </div>
  );
};

export default RideHistory;
