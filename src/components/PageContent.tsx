import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useMemo } from "react";

interface Page {
  title:String, 
  bodyText:String
}

const PageContent = ({ page }: { page: any }) => {
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
