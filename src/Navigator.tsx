import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { routes as appRoutes } from "./Routes";
import Wrapper from "./pages/Wrapper";
import Login from "./pages/authentication";
import RenderOnAuth from "./pages/RenderOnAuth";

const Navigation = () => {
  const navigate = useNavigate();

  // Set the initial route to the dashboard component when the component mounts
  // useEffect(() => {
  //   navigate(`${process.env.PUBLIC_URL}/dashboard`);
  // }, []);

  return (
    <>
      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={
              <RenderOnAuth>
                <Wrapper>
                  <route.component />
                </Wrapper>
              </RenderOnAuth>
            }
          />
          // Add additional routes in Routes.ts as required.
        ))}
        <Route
          key={"login"}
          path={`${process.env.PUBLIC_URL}/login`}
          element={<Login />}
        />
      </Routes>
    </>
  );
};

export default Navigation;

/* Control Flow: index -> App -> Navigator*/
