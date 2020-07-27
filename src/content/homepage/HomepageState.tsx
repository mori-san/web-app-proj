import { action } from "mobx";

//=======================================================
// The state of the homepage
//=======================================================
export default class HomepageState {
  @action
  goToGitHubRepository = () => {
    window.open("https://github.com/mori-san/web-app-proj");
  };
}
