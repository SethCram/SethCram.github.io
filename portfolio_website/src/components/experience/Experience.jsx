import React from 'react'
import './experience.css'
import {BsPatchCheckFill } from 'react-icons/bs'

function ExperienceItem(props) {
  return (
      <article className='experience__details'>
        {props.icon}
        <h4>{props.skill}</h4>
        <small className='text-light'>{props.proficiency}</small>
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
  const frontend_specs = [
    {id: 1, skill: 'HTML', proficiency: 'Experienced', icon: <BsPatchCheckFill/> }, 
    {id: 2, skill: 'CSS', proficiency: 'Experienced', icon: <BsPatchCheckFill /> },
    {id: 3, skill: 'JS', proficiency: 'Experienced', icon: <BsPatchCheckFill /> },
    {id: 4, skill: 'Bootstrap', proficiency: 'Experienced', icon: <BsPatchCheckFill /> },
    {id: 5, skill: 'NodeJS', proficiency: 'Experienced', icon: <BsPatchCheckFill /> },
    {id: 6, skill: 'React', proficiency: 'Experienced', icon: <BsPatchCheckFill/>},
  ];
  const backend_specs = [
    {id: 1, skill: 'Python', proficiency: 'Advanced', icon: <BsPatchCheckFill/> }, 
    {id: 2, skill: 'C#', proficiency: 'Proficient', icon: <BsPatchCheckFill /> },
    {id: 3, skill: 'C++', proficiency: 'Experienced', icon: <BsPatchCheckFill /> },
    {id: 4, skill: '.NET', proficiency: 'Experienced', icon: <BsPatchCheckFill /> },
    {id: 5, skill: 'Django', proficiency: 'Experienced', icon: <BsPatchCheckFill/>},
  ];
  const other_specs = [
    {id: 1, skill: 'CI Pipelines', proficiency: 'Experienced', icon: <BsPatchCheckFill/> }, 
    {id: 2, skill: 'Docker', proficiency: 'Experienced', icon: <BsPatchCheckFill /> },
    {id: 3, skill: 'OpenShift', proficiency: 'Experienced', icon: <BsPatchCheckFill /> },
    {id: 4, skill: 'Unity', proficiency: 'Proficient', icon: <BsPatchCheckFill/>},
  ];
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <ExperienceBlock
              title='Frontend Development'
              specs={frontend_specs}
          />
        </div>
        
        <div className='experience__backend'>
          <ExperienceBlock
            title='Backend Development'
            specs={backend_specs}
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