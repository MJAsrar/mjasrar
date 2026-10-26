import { Fragment } from "react";

// Renders a headline figure, setting any "<" tighter than the font's default
// spacing so "<$5" doesn't read as "< $5".
export default function Figure({ value }: { value: string }) {
  return (
    <>
      {value.split("<").map((part, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="lt">&lt;</span>}
          {part}
        </Fragment>
      ))}
    </>
  );
}
