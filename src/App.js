import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const records = useSelector((state) => state.records);
  useEffect(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, [records]);
  return <Layout records={records} />;
}

export default App;
