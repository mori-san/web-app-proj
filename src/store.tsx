import HomepageState from "./content/homepage/HomepageState";
import AboutmeState from "./content/aboutme/AboutmeState";

//=======================================================
// States for all the pages.
//=======================================================
const homepageState = new HomepageState();
const aboutmeState = new AboutmeState();

export default {
  homepageState: homepageState,
  aboutmeState: aboutmeState,
};
