import { useState } from "react";

function StateDemo() {
  //state
  let [counter, setCounter] = useState(1);

  let [username, setUsername] = useState("rajesh");

  let [person,setPerson]=useState({pid:100,name:'ravi',age:20})

  let [skills,setSkills]=useState(['js','react','angular'])

  function incrementCounter() {
    setCounter(counter + 1);
  }
  function decrementCounter() {
    setCounter(counter - 1);
  }

  function changeName() {
    setUsername("suryateja");
  }

  function changePerson(){
        setPerson({...person,name:'bhanu'})
  } 

  function deleteAge(){
     //create copy of person
     let copyPerson={...person}
     //remove age from copuy
     delete copyPerson.age;
     //replace person with copy
     setPerson(copyPerson)
  }

  function addSkill(){
    setSkills(['Java',...skills])
  }

  return (
    <div className="text-center">
      <h1 className="text-info display-2">State Demo</h1>
      <p className="display-3 fs-1">{counter}</p>
      <button className="btn btn-success" onClick={incrementCounter}>
        Increment
      </button>

      <button className="btn btn-danger ms-4" onClick={decrementCounter}>
        Decrement
      </button>

      <p className="lead fs-1">{username}</p>
      <button className="btn btn-warning" onClick={changeName}>
        Change name
      </button>

      <h1 className="text-primary display-2">{person.pid}</h1>
      <h1 className="text-primary display-2">{person.name}</h1>
      <h1 className="text-primary display-2">{person.age}</h1>
      <button className="btn btn-primary" onClick={changePerson}>Change person data</button>
      <button className="btn btn-secondary ms-4" onClick={deleteAge}>Delete age</button>


      {/* render skills array */}
      {
        skills.map((skill)=><h2 className="text-danger" key={skill}>{skill}</h2>)
      }

      <button className="btn btn-success" onClick={addSkill}>Add "java" skill</button>
    </div>
  );
}

export default StateDemo;
