import React, { useState } from "react";
import * as ROUTE from "../constants/routes";
import { Header } from "./header";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "../containers/profiles";
import FooterContainer from "../containers/footer";

export default function BrowseContainer() {
  const [profile, setProfile] = useState({});

  const user = {
    displayName: "Karl",
    photoUrl: "1",
  };

  return profile.displayName ? (
    <>
      <p>BROWSE CONTAINER</p>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer
      user={user}
      setProfile={setProfile}
      profile={profile}
    />
  );
}
