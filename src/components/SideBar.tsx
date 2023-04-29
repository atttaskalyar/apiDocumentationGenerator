import { Page } from "../interfaces";
import { partial } from "lodash";

interface Props {
  pages: Page[];
  onChangePage: (newPageNumber: number) => void;
}

const SideBar = (props: Props) => {
  const { pages, onChangePage } = props;

  return (
    <div style={{ minWidth: "20%", overflow: "hidden" }}>
      {pages.map((page: Page, index: number) => {
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
            onClick={partial(onChangePage, index)}
            key={index}
          >
            <h2>{page.title}</h2>
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
