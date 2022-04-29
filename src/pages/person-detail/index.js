import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPersonDetail } from "../../redux/actions/person";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IMAGE_PATH } from "../../configs/api";
import Footer from "../../components/footer";

const PersonDetailScreen = () => {
  // Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.persons);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPersonDetail(id));
  }, []);

  const actor = store.data;
  const loading = store?.loading;
  console.log(actor);

  return (
    <div className="min-h-screen">
      <div className=" relative ">
        {!loading && actor ? (
          <div className="flex min-h-[50vh] py-10 bg-center bg-cover bg-no-repeat  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-tr before:from-black">
            <div className={`hidden md:block relative px-12`}>
              <img
                className={` sm:w-64 md:w-80 lg:w-96 rounded-2xl `}
                src={`${IMAGE_PATH}${actor.profile_path}`}
              />
            </div>
            <div className="w-2/3 px-8 relative">
              <div className="font-medium text-xl md:text-4xl mb-4">
                <h1>{actor.name}</h1>
              </div>
              <p className="">{actor.biography}</p>
              <div className="relative">
                <h2 className="font-medium text-xl mt-2">Birthday</h2>

                <div className="text-lg font-medium">{actor.birthday}</div>
              </div>
              <div className="relative">
                <h2 className="font-medium text-xl my-4">Place Of Birth</h2>
                {actor.place_of_birth}
              </div>
            </div>
          </div>
        ) : (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={"50vh"} width={"100%"} count={1} />
          </SkeletonTheme>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PersonDetailScreen;
