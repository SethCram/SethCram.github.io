import React from 'react'
import './experience.css'
import {BsPatchCheckFill } from 'react-icons/bs'

function ExperienceItem(props) {
  return (
      <article className='experience__details'>
      {props.icon}
        <div>
          <h4>{props.skill}</h4>
          <small className='text-light'>{props.proficiency}</small>
        </div>
      </article>
  );
}

/* Return must be enclosed in div tag */
function ExperienceBlock(props) {
  return (
    <div className='experience__block' >
      <h3>{props.title}</h3>
      <div className='experience__content'>
      {props.specs.map((spec, i) => {
        return (
          <div key={i}>
            <ExperienceItem
              icon={spec.icon}
              skill={spec.skill}
              proficiency={spec.proficiency}
            />
          </div>
        );
      })}
      </div>
    </div>
  );
}

const experience = () => {
  const backend_specs = [
    {skill: 'MySQL', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> }, 
    {skill: 'NoSQL', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> }, 
    {skill: 'Python', proficiency: 'Advanced', icon: <BsPatchCheckFill className='experience__details-icon' /> }, 
    {skill: 'C#', proficiency: 'Proficient', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'C++', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Java', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: '.NET', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Django', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon'/>},
    {skill: 'MongoDB', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  ];
  const frontend_specs = [
    {skill: 'JavaScript', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'ReactJS', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'NodeJS', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'CSS', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'HTML', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Bootstrap', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon'/>},
  ];
  const devops_specs = [
    {skill: 'AWS', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon'/> }, 
    {skill: 'Microsoft Azure', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Github', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon'/> }, 
    {skill: 'CI/CD Pipelines', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon'/> }, 
    {skill: 'Docker', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Linux', proficiency: 'Advanced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Bash', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'OpenShift', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Windows', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  ];
  const other_specs = [
    {skill: 'Git', proficiency: 'Advanced', icon: <BsPatchCheckFill className='experience__details-icon'/> }, 
    {skill: 'C', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Agile Development', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon'/>},
    {skill: 'AI/ML', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Tensorflow', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Unity', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {skill: 'Blender', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  ];
  /*
    {id: 5, skill: 'Linux OS', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 6, skill: 'Windows OS', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon'/>},
    {id: 7, skill: 'Unity', proficiency: 'Proficient', icon: <BsPatchCheckFill className='experience__details-icon'/>},
  */
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div>
          <ExperienceBlock
            title='Backend Development'
            specs={backend_specs}
          />
        </div>
        <div>
          <ExperienceBlock
              title='Frontend Development'
              specs={frontend_specs}
          />
        </div>
        <div>
          <ExperienceBlock
            title='DevOps Development'
            specs={devops_specs}
          />
        </div>
        <div>
          <ExperienceBlock
            title='Other Development'
            specs={other_specs}
          />
        </div>
      </div>
    </section>
  )
}

export default experience