import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPrize } from "../../redux/actionCreators";
import { Overview } from "../templates";

export function End() {
  const prize = useSelector((state) => state.prize);
  const formatPrize = prize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setPrize(0));
    };
  }, []);

  return (
    <Overview
      score
      title={`$${formatPrize} earned`}
      buttonLabel='Try again'
      redirectTo='/'
    />
  );
}
