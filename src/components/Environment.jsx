import { useEffect, useState } from "react";
export default function Environment() {
  const [environment, setEnvironment] = useState(null);
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      setEnvironment(process.env.REACT_APP_DEVELOPMENT_IMAGES);
    } else {
      setEnvironment(process.env.REACT_APP_PRODUCTION_IMAGES);
    }
  }, []);
  return <span>{environment}</span>;
}
