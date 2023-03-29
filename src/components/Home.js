import '../css/Home.css';
import InputComp from './InputComp';
import Person from './Person';
import { useState } from 'react';
import Sonny from '../img/손흥민.jpg';
import Ho from '../img/호날두.jpg'
import vini from '../img/비니시우스.jpg';

function Home (){
    const [personList, setPersonList] = useState([
        {img:Sonny,no:1,name:'손흥민', age:30, height:183, foot:'양발', league:'프리미어리그',team:'토트넘'},
        {img:Ho,no:2,name:'호날두', age:38, height:187, foot:'양발',league:'사우디리그',team:'알나스르'},
        {img:vini,no:3,name:'비니시우스주니어', age  :20, height:176, foot:'오른발',league:'라리가',team:'레알마드리드'}
      ])

      const addPersonInfo = (no,name,age,height,foot,league,team) => {
        const personObj = {no:no,name:name,age:age,height:height,foot:foot,league:league,team:team}
        const concatedList = personList.concat(personObj)
        setPersonList(concatedList)
      }
      const deletePersonInfo = (name) => {
        const filteredList = personList.filter(
          (data)=>(data.name !== name)
        )
        setPersonList(filteredList)
      }
    
      const updatePersonInfo = (no,name,age,height,foot,league,team) => {
        const updatedPersonObj = {no:no,name:name,age:age,height:height,foot:foot,league:league,team:team}
        const updatedPersonList = personList.map(
          (data)=>(data.no===no) ? ({...data,...updatedPersonObj}):data
        )
        setPersonList(updatedPersonList)
      }


      const result = personList.map(
        (data)=>(<Person img={data.img}  no={data.no} name={data.name} age={data.age} height={data.height} foot={data.foot}
        league={data.league} team={data.team} deletePersonInfo={deletePersonInfo}
        updatePersonInfo={updatePersonInfo}/>)
      )

      
    return(
        <div id='home'>
            <InputComp addPersonInfo={addPersonInfo}/>
            {result}
        </div>
    )
}

export default Home;