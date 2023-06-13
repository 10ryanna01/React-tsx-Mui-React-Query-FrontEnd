 
import { usePosts } from "../../api/hooks/use-posts";
import {
  
  Box,
  Link,

} from "@mui/material";

export const About = () => {
  const { isLoading, data:companyData, error } = usePosts();

  if (error) {
    return <h1>sorry there was an error </h1>;
  }
  if (isLoading) {
    <h1> data is delayed for to demonstrate fallbacks UX....</h1>;
  }

  return (
    <>
    <Box>

      <h2 className="mvp__UI__utility__copy__h2"> test render array from Space X Adress API</h2>

      {isLoading ? <span className=" mvp__UI__utility__copy__h5">  data is delayed for to demonstrate fallbacks UX... </span> : ""}
        <ul className="mvp__UI__utilit__list">
          
      <li className="mvp__UI__utility__list__item">Adress </li>
      <li className="mvp__UI__utility__list__item">road: {companyData?.headquarters.address}</li>
      <li className="mvp__UI__utility__list__item">city: {companyData?.headquarters.city}</li>
      <li className="mvp__UI__utility__list__item">state: {companyData?.headquarters.state}</li>
      </ul>
      
    </Box>

    <Box>
  
      <Link
        data-flickr-embed="true"
        href={`${companyData?.links.flickr}52822391709`}
        title="Starship Test Flight Mission"
        className="mvp__UI__utility__link"
      >
        <img className="mvp__UI__utility__img--lg"
          src="https://live.staticflickr.com/65535/52822653368_73c69f06cd_4k.jpg"
         alt="Starship Test Flight Mission" 
        />{" "}
    
      <span className="mvp__UI__utility__copy__link-text"> renderd  link &amp; image embed ||  cick to visit image</span> 
      </Link>
      
      </Box>
    </>
  );
};
