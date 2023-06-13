import { 
  Link,
  List,
  ListItemButton, 
} from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { About } from "./components/About/About";
import { Cars } from "./components/Cars/Cars";

function App({}) {
  return (
    <>
      <div className="mvp__UI__utility__container">
        <main className="mvp__UI__utility__container__padding">
          <header>
            <List
              className="mvp__UI__utility__navigation  "
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton className="mvp__UI__utility__navigation__item">
                <AccessibilityNewIcon />
                accessability
              </ListItemButton>
              <ListItemButton className="mvp__UI__utility__navigation__item">
                settings
                <SettingsSuggestIcon />
              </ListItemButton>
              <ListItemButton className="mvp__UI__utility__navigation__item">
                <AccountCircleIcon />
                profile
              </ListItemButton>

              <Link className="mvp__UI__utility__link">this is a link</Link>
            </List>
          </header>

          <Cars />
          <About />
          <footer> footer items</footer>
        </main>
      </div>
    </>
  );
}

export default App;
