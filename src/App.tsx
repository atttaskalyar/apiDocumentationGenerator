import { useState, useEffect, useRef, LegacyRef } from "react";

import SideBar from "./components/SideBar";
import PageContent from "./components/PageContent";
import { Page } from "./interfaces";

import "./index.css"



function App() {
  const [data, setData] = useState<Page[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const addressInputElement = useRef<any>(null);

  const loadDocumentation = () => {
    console.log(addressInputElement.current);
    fetch(addressInputElement.current?.value)
      .then((response) => response.json())
      .then((data) => setData(data.Pages));
  };

  return (
    <>
      {data.length > 0 ? (
        <div style={{ display: "flex", margin: "10px 2%", gap: "20px" }}>
          <SideBar pages={data} onChangePage={setPageNumber} />
          <PageContent page={data[pageNumber]} />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            scrollbarColor:"transparent"
          }}
        >
          <h1 style={{fontSize:"40px", display:"block"}}>Input the URL to get the documentation</h1>
          <input
          style={{marginTop:"10px", fontSize:"20px"}}
            type="text"
            placeholder="enter link"
            ref={addressInputElement}
          />
          <button
            style={{marginTop:"20px", fontSize:"15px"}}
            type="button"
            onClick={loadDocumentation}
            placeholder="Request Documentation"
          >
            Load Documentation
          </button>
        </div>
      )}
    </>
  );
}

export default App;
