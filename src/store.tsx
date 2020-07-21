import HomepageState from "./content/homepage/HomepageState";
import AboutmeState from "./content/aboutme/AboutmeState";
import SampleState from "./content/sample/SampleState";

//=======================================================
// States for all the pages.
//=======================================================
const homepageState = new HomepageState();
const aboutmeState = new AboutmeState();
const sampleState = new SampleState();

export default {
  homepageState: homepageState,
  aboutmeState: aboutmeState,
  sampleState: sampleState,
};
