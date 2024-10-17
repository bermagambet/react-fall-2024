import { Button } from "antd";
import React, { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";

// reference vs. primitive

const Lesson6 = () => {
  const routeLoaderData = useRouteLoaderData("root"); // get loader data from any parent Roite
  console.log("nested child loader data", routeLoaderData);

  // returns method for navigation, example: navigate("newUrl")
  const navigate = useNavigate(); // yellow - function

  // returns context object, which is passed as <Outlet context={context} />
  const { myProp } = useOutletContext();

  // return object of parameters, which are supplied by adding ":" to any part of the path
  const { id2 } = useParams(); // get parameters from URL, naming is the same for route path

  // I want to know which url I am using
  // window.location.pathname

  // return mini-version of window.location
  const location = useLocation();
  console.log(location);

  console.log(id2);

  useEffect(() => {
    console.log("check if context changed");
  }, [myProp]);

  return (
    <Button
      onClick={() => {
        navigate("2", {
          state: {
            userId: 2,
          },
        }); // child/1/2
        // -> "/2" -> absolute URL
        // -> child/1/2 -> "2" -> relative URL
      }}
    >
      navigate
    </Button>
  );
};

export default Lesson6;
