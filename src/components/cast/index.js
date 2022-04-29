import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCasts } from "../../redux/actions/movie";
import Button from "@mui/material/Button";

const Cast = ({ category, id }) => {
  //Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getCasts(category, id));
  }, []);

  const casts = store.castData?.cast?.slice(0, 6);
  return (
    <div className="flex flex-wrap gap-3 ">
      {casts?.map((actor, index) => (
        <Link key={index} to={`/actor/${actor.id}`}>
          <Button variant="text" color="inherit">
            {actor.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Cast;
