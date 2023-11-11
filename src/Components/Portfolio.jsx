/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Gray Scale to color image conversion",
    description:
      "Deep learning project working with GAN's and U-NET.",
    url: "https://www.linkedin.com/posts/mehenaaz_image-colorization-using-gans-activity-7092067809504989184-_XaU/",
  },
  {
    title: "Online food ordering system",
    description:
      "whole documentation of how it is built and works.",
    url: "https://www.linkedin.com/posts/mehenaaz_online-food-ordering-system-activity-7076283770680606720-dn5z/",
  },
  {
    title: "Chat application",
    description:
      "Java chat application using Swing and AWT",
    url: "https://www.linkedin.com/posts/mehenaaz_java-awt-swing-activity-7118224179363004416-UI_V/",
  },
  {
    title: "UI-design",
    description:
      "UI for art trading website.",
    url: "https://www.linkedin.com/posts/mehenaaz_ui-activity-7074834909789310976-YrIh/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
