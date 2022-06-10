import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Card, Button, CardCarousel } from "cyberfuture";

// const bodyvar = {text: 'body={<div>content</div>}'};

// const cfscopeCard = { Card, Button, bodyvar };

const cfscopeCard = { Card, Button };

// const cfcode = `
// <Card
// variant="matrix"
// title="Card Title"
// bodyvar.text
// ></Card>
// `;

const cfcode = `
<Card
variant="matrix"
title="Card Title"
end=<Button text="button" variant="Matrix" />
></Card>
`;

export default function LiveProvCard() {
    return (
      <div className="codebox">
        <LiveProvider code={cfcode} scope={cfscopeCard} >
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }
