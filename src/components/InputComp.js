import '../css/InputComp.css';

import {useState} from 'react';

function InputComp (props){


    const [img,setImg]=useState('')
    const [no,setNo] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [height,setHeight] = useState('');
    const [foot,setFoot] = useState('');
    const [league,setLeague] = useState('');
    const [team,setTeam] = useState('');

    const addPersonInfo = () => {
        alert('addPersonInfo(InputComp)')
        props.addPersonInfo(no,name,age,height,foot,league,team)
    }
    return(
        <div id='input-Comp'>
            <label>번호</label><input type='text' onChange={(e)=>setNo(e.target.value)}/>
            <label>이름</label><input type='text' onChange={(e)=>setName(e.target.value)}/>
            <label>나이</label><input type='text' onChange={(e)=>setAge(e.target.value)}/>
            <label>키</label><input type='text' onChange={(e)=>setHeight(e.target.value)}/>
            <label>주발</label><input type='text' onChange={(e)=>setFoot(e.target.value)}/>
            <label>소속리그</label><input type='text' onChange={(e)=>setLeague(e.target.value)}/>
            <label>소속팀</label><input type='text' onChange={(e)=>setTeam(e.target.value)}/>
            <button onClick={addPersonInfo}>추가</button>   
        </div>
    )
}

export default InputComp;