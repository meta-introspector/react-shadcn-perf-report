import React from "react";

import { Profile } from "../types/ProfileData"
class ProfileProps {}
class ProfileState {
  data?: Profile
}

//import {ReportSelectorComponent} from "./ReportSelectorComponent"
class ProfileComponent extends React.Component<ProfileProps, ProfileState> {
  state: ProfileState = {
    data : {
    functions: [],
    // Initialize state as needed
    testCases: [{ name: "t1", file: "t1" }],
    versions: [],
    testRuns: []
    }
  };

/*   prepareReport = () => {
    const reportSelector = new ReportSelectorComponent({
      testCases: this.state.testCases,
      versions: this.state.versions,
      testRuns: this.state.testRuns,
    });
    return reportSelector;
  }; */

  render() {
    // TO DO: implement rendering
    return <div>Profile</div>;
  }
}
