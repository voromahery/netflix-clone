import React from "react";
import BrowseContainer from "../containers/browse";
import { useContent } from "../hooks";
import { SelectionMap } from "../utils";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = SelectionMap({ series, films });
  console.log(slides);

  return <BrowseContainer slides={slides} />;
}
