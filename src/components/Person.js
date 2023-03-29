import '../css/Person.css'
import { useState } from 'react';

function Person (props) {

    const [edit,setEdit] = useState(false)
    const [img,setImg] = useState(props.img)
    const [no,setNo] = useState(props.no)
    const [name,setName] = useState(props.name)
    const [age,setAge] = useState(props.age)
    const [height,setHeight] = useState(props.height)
    const [foot,setFoot] = useState(props.foot)
    const [league,setLeague] = useState(props.league)
    const [team,setTeam] = useState(props.team)

    const deletePersonInfo = () => {
        props.deletePersonInfo(props.name)
    }

    const updatePersonInfo = () => {
        if(edit===true){
            const no=props.no
            props.updatePersonInfo(no,name,age,height,foot,league,team)
        }
        setEdit(!edit)
    }

    if(edit===false){
        return(
            <div id='person'>
                <img src={props.img}></img>
                <div>번호 : {props.no}</div>
                <div>이름 : {props.name}</div>
                <div>나이 : {props.age}</div>
                <div>키 : {props.height}</div>
                <div>주발 : {props.foot}</div>
                <div>소속 리그 : {props.league}</div>
                <div>소속팀 : {props.team}</div>
                <button onClick={deletePersonInfo}>삭제</button>
                <button onClick={updatePersonInfo}>수정</button>
            </div>
        )
    }else if(edit===true){
        return(
            <div id='person'>
                <div>
                    번호:<input type='text' defaultValue={props.no}
                    onChange={e=>setNo(e.target.value)}/>
                </div>
                <div>
                    이름:<input type='text' defaultValue={props.name}
                    onChange={e=>setName(e.target.value)}/>
                </div>
                <div>
                    나이:<input type='text' defaultValue={props.age}
                    onChange={e=>setAge(e.target.value)}/>
                </div>
                <div>
                    키:<input type='text' defaultValue={props.height}
                    onChange={e=>setHeight(e.target.value)}/>
                </div>
                <div>
                    주발:<input type="text" defaultValue={props.foot}
                    onChange={e=>setFoot(e.target.value)}/>
                </div>
                <div>
                    소속 리그:<input type='text' defaultValue={props.league}
                    onChange={e=>setLeague(e.target.value)}/>
                </div>
                <div>
                    소속팀:<input type='text' defaultValue={props.team}
                    onChange={e=>setTeam(e.target.value)}/>
                </div>
                <button onClick={updatePersonInfo}>수정</button>
            </div>
        )
    }


   
}

export default Person;