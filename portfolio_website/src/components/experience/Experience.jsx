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
      {props.specs.map(spec => {
        return (
          <div key={spec.id}>
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
    {id: 1, skill: 'MySQL', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> }, 
    {id: 2, skill: 'Python', proficiency: 'Advanced', icon: <BsPatchCheckFill className='experience__details-icon' /> }, 
    {id: 3, skill: 'C#', proficiency: 'Proficient', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 4, skill: 'C++', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 5, skill: 'Java', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 6, skill: '.NET', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 7, skill: 'Django', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon'/>},
    {id: 8, skill: 'MongoDB', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  ];
  const frontend_specs = [
    {id: 1, skill: 'JavaScript', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 2, skill: 'ReactJS', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 3, skill: 'NodeJS', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 4, skill: 'CSS', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 5, skill: 'HTML', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 6, skill: 'Bootstrap', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon'/>},
  ];
  const other_specs = [
    {id: 1, skill: 'Git', proficiency: 'Advanced', icon: <BsPatchCheckFill className='experience__details-icon'/> }, 
    {id: 2, skill: 'CI/CD Pipelines', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon'/> }, 
    {id: 3, skill: 'Docker', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 4, skill: 'Linux', proficiency: 'Advanced', icon: <BsPatchCheckFill className='experience__details-icon'/>},
    { id: 5, skill: 'ML', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 6, skill: 'Agile', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 7, skill: 'OpenShift', proficiency: 'Basic', icon: <BsPatchCheckFill className='experience__details-icon' /> },
    {id: 8, skill: 'Unity', proficiency: 'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
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
        <div className='experience__backend'>
          <ExperienceBlock
            title='Backend Development'
            specs={backend_specs}
          />
        </div>
        <div className='experience__frontend'>
          <ExperienceBlock
              title='Frontend Development'
              specs={frontend_specs}
          />
        </div>
        <div className='experience__other'>
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