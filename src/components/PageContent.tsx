import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useMemo } from "react";
import { Page } from "../interfaces";

// interface Page {
//   title:String, 
//   bodyText:String
// }
interface Props{
  page: Page
}

const PageContent = (props: Props) => {
  const { page } = props;

  return useMemo(
    () => (
      <div>
        <h1>{page.title}</h1>
        <ReactMarkdown>{page.bodyText}</ReactMarkdown>
      </div>
    ),
    [page]
  );
};

export default PageContent;
