import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


function List() {

    const [list, setList] = useState([]);
    const [indexToUpdate, setIndexToUpdate] = useState();
    const [btnText, setBtnText] = useState("Save");
    const [btnAction, setBtnAction] = useState("save");
    const [inputVal, setInputVal] = useState("");

    useEffect(()=>{
        const myList = localStorage.getItem("myList")? localStorage.getItem("myList").split(',') : [];
        setList([...myList])
    },[])

    const handleAddUpdate = (e) => {
        if (inputVal=="") {
            alert("Please Enter Some Text");
            return false;
        }
        if (e.target.value == "save") {
            setList(oldState=>{
                const newList = [...oldState,inputVal];
                localStorage.setItem("myList",newList)
               return newList;
            });
            setInputVal("");
        }else if(e.target.value == "update"){
            const newList = [...list];
            newList[indexToUpdate] = inputVal;
            setList(newList);
            localStorage.setItem("myList",newList)
            setBtnText("Save");
            setBtnAction("save");
            setInputVal("");
        }
        setIndexToUpdate("")
    }

    const handleInputText = (e) => {
        if (e.target.value=="") {
            setBtnText("Save");
            setBtnAction("save");
        }
        setInputVal(e.target.value);
    }

    const handleEditAction = (value, index) => {
        setIndexToUpdate(index)
        setInputVal(value);
        setBtnText("Update");
        setBtnAction("update");
    }

    const handleDeleteItem = (e) => {
        const newlist = list.filter((_, i) => i !== e);
        setList(newlist);
        localStorage.setItem("myList",newlist)
    }

  return (
    <>
        <div className='container custom-container list-stack'>
            <p>Create Your List</p>
            <div>
                <input type='text' value={inputVal} className='form-control' placeholder="Add your text here..." onChange={handleInputText}  />
                <Button variant="secondary" className='btn' value={btnAction} onClick={handleAddUpdate}>{btnText}</Button>
            </div>
        </div>
        <div className='container custom-container yourList'>
            <ListGroup>
                {list.map( (obj, key) =>{
                    return <ListGroup.Item key={key}>{obj} <span><Button className='editList' onClick={()=>handleEditAction(obj,key)} ><i className='fa fa-edit'></i></Button> <Button className='danger' onClick={()=>handleDeleteItem(key)}><i className='fa fa-trash'></i></Button></span></ListGroup.Item>
                })}
            </ListGroup>
        </div>
    </>
  );
}

export default List;