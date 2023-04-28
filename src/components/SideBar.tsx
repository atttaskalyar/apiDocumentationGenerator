import { useMemo } from "react";

const SideBar = ({
  pages,
  setPageNumber,
}: {
  pages: any;
  setPageNumber: Function;
}) => {
  const memoizedButtons = useMemo(() => {
    return pages.map((page: any, index: number) => {
      return (
        <button
          style={{
            display: "block",
            marginTop: "5px",
            width: "100%",
            textAlign: "left",
            paddingLeft: "1.875rem",
            cursor: "click",
            caretColor: "transparent",
          }}
          onClick={() => {
            setPageNumber(index);
          }}
          key={index}
        >
          <h2>{page.title}</h2>
        </button>
      );
    });
  }, [pages]);

  return (
    <div style={{ minWidth: "20%", overflow: "hidden" }}>{memoizedButtons}</div>
  );
};

export default SideBar;
