import React, { Component } from 'react';
import Project from '../../components/Project'
import Grid from "@material-ui/core/Grid";
import './Projects.css';
import Info from '../../info.json'

class Projects extends Component {
  constructor(props) {
    super(props);
    
  }

  
  render() {
    const projectArr = Info.projects;
    return (
      <div className='container'>
        <span>
          <Grid container spacing={24}>
          {projectArr.map((project, i) => {
            return <Project key={i++}
              name={project.name}
              time={project.time}
              links={project.links}
              desc={project.desc}
              techs={project.techs}
              highlights={project.highlights}
            />
          })}
          </Grid>
        </span>
      </div>
    )
  }
}
export default Projects;