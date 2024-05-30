import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RenderOnAuth = ({ children }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("react-token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      {sessionStorage.getItem("react-token") ? <div>{children}</div> : null}
    </div>
  );
};

export default RenderOnAuth;
