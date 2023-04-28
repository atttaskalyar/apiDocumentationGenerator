import { useState, useEffect } from "react";

import SideBar from "./components/SideBar";
import PageContent from "./components/PageContent";

import {api} from "./config"

interface page{
  title:String,
  bodyText:String
}

function App() {
  const [data, setData] = useState<Array<page>>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [error, setError] = useState<boolean>(false); 

  useEffect(() => {
    fetch(
      api
    )
      .then((response) => response.json())
      .then((data) => setData(data.Pages))
      .catch(()=>{
        setError(true)
      })
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <div style={{ display: "flex", margin: "10px 2%", gap: "20px" }}>
          <SideBar pages={data} setPageNumber={setPageNumber} />
          <PageContent page={data[pageNumber]} />
        </div>
      ) : 
      (
        <div style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <h1>{error? "Error in Loading Website, Please refresh": "Loading"}</h1>
        </div>
      )}
    </>
  );
}

export default App;
