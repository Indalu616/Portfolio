import React from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
function Projects({ projects }) {
  return (
    <div className="container">
      <div className="row work-list">
        {projects?.map((work) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 p-2" key={work.id}>
              <ProjectModal work={work} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
