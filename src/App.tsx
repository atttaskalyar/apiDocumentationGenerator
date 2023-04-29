import { useState, useEffect, useRef, LegacyRef } from "react";

import SideBar from "./components/SideBar";
import PageContent from "./components/PageContent";
import { Page } from "./interfaces";



function App() {
  const [data, setData] = useState<Page[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  // const [error, setError] = useState<boolean>(false);

  const addressInputElement = useRef<any>(null);

  const loadDocumentation = () => {
    console.log(addressInputElement.current);
    fetch(addressInputElement.current?.value)
      .then((response) => response.json())
      .then((data) => setData(data.Pages));
  };

  useEffect(() => {
    // fetch(
    //   api
    // )
    //   .then((response) => response.json())
    //   .then((data) => setData(data.Pages))
    //   .catch(()=>{
    //     setError(true)
    //   })
  }, []);

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
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Input the URL to get the documentation</h1>
          <input
            type="text"
            placeholder="enter link"
            ref={addressInputElement}
          />
          <button
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
