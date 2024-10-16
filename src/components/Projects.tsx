import Project from "./Project";

const Projects = () => {
  return (
    <div className="text-black mt-6">
      <div className="collapse collapse-arrow border border-black">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Projects</div>
        <div className="collapse-content">
          <div className="flex flex-col gap-6">
            <Project
              title={"Recipi"}
              description={
                "Platform where sharing, discovering and managing recipes has never been easier"
              }
              githubLink={"#"}
              demoLink={"#"}
            />
            <Project
              title={"Task Management"}
              description={
                "Easily add tasks, set priorities, mark them as done, and delete when completed — your go-to app for staying organized and efficient."
              }
              githubLink={"#"}
              demoLink={"#"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
