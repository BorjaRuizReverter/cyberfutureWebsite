import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Button } from "cyberfuture";
const cfscope = { Button };

const cfcode = `
  <Button text="CyberFuture" variant="Matrix"/>
`;

export default function LiveProv() {
    return (
      <div className="codebox">
        <LiveProvider code={cfcode} scope={cfscope}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }
