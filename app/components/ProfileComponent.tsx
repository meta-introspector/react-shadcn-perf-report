import React from "react";
import { ProfileProps } from "./ProfileProps";
import { ProfileState } from "./ProfileState";
import {ReportSelectorComponent} from "./ReportSelectorComponent"
class ProfileComponent extends React.Component<ProfileProps, ProfileState> {
  state: ProfileState = {
    functions: [],
    // Initialize state as needed
    testCases: [{ name: "t1", file: "t1" }],
    versions: [],
    testRuns: []
  };

  prepareReport = () => {
    const reportSelector = new ReportSelectorComponent({
      testCases: this.state.testCases,
      versions: this.state.versions,
      testRuns: this.state.testRuns,
    });
    return reportSelector;
  };

  render() {
    // TO DO: implement rendering
    return <div>Profile</div>;
  }
}
