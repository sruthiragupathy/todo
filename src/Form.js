import React,{useState, Fragment,useEffect} from "react";
import "./form.css";


const Form = ({
    all=false,
    active = false,
    completed = false
}) =>{
    const arr = JSON.parse(localStorage.getItem('todos'))
    // console.log({arr});
    const [item,setItem] = useState('');
    const [list,setList] = useState(arr||[])
    const [checked,setChecked] = useState(false);
    const [boolforpopulateList,setBoolforpopulateList]=useState(false)
    // console.log({list});
    

    useEffect(()=>{
        allPage()
        activePage()
        completedPage()
    },[checked])
    
    
    const populateList=()=>{
        // console.table(list);
        localStorage.setItem('todos',JSON.stringify(list))

        setBoolforpopulateList(false);
    }
    const onSubmit = (e) =>{
        // console.log({item})
        e.preventDefault();
        if(item!==""){
        const newItem = {
            id:Date.now(),
            value:item,
            isDone:false
        }
        
        setList([newItem,...list])
        setItem('');
        setBoolforpopulateList(true);
        // populateList();
    }

    }
    // var cls = "input-checkbox";
    const handleChange=item =>e=>{
   
        list.map((i)=>{
            if(i.id===item.id){
                // console.log(i);
                i.isDone = !i.isDone
            }
        })
        // console.log(list);
        setChecked(!checked)
        localStorage.setItem('todos',JSON.stringify(list));
        setList(JSON.parse(localStorage.getItem('todos')))
        return list;
        
    }
    
    const allPage = () =>(
        all && (
            <div className="list">
                {list.map((item,index)=>{
                    
                    return(
                        <li key = {index} style={{
                            textDecoration: item.isDone ? 'line-through' : 'none'}}>
                        
                            <input  type="checkbox" onChange = {handleChange(item)} className="input-checkbox" name={item.id} checked={item.isDone?"checked":""} />
                            <label>{item.value}</label>
                        </li>
                    )
                        })}
            </div>
                   
        )
    )

    const activePage = () =>(
        // console.log(list)
        
        active && (
        
            
            <div className="list">
                
            {list.map((item,index)=>{
                    if(item.isDone===false){
                        return(
                            <li key = {index} >
                            <input  type="checkbox" onChange = {handleChange(item)} className="input-checkbox" name={item.id} checked={item.isDone?"checked":""} />
                            <label>{item.value}</label>            
                                {/* <input  type="checkbox" onChange = {handleChange(item)} className="input-checkbox"/>{item.value} */}
                            </li>
                        )
                    }
                })}
            </div>

        )
        

    )

    const onDelete = item => e =>{
        e.preventDefault();
        // console.log(list);
        list.map((l)=>{
            if(l.id===item.id){
                const indx = list.indexOf(l);
                // console.log(indx);
                list.splice(indx,1);
                // console.log(list)
                localStorage.setItem('todos',JSON.stringify(list))
                completed = true;
                setChecked(!checked)


            }
        })
    }

    const completedPage = () =>(
        completed && (
            <div className = "list">
                {list.map((item,index)=>{
                    if(item.isDone === true){
                        return(
                            <ul key={index} className = "completed">
                            <li style={{textDecoration:"line-through"}}>{item.value}</li>
                            <button className="btn btn-danger btn-sm" onClick = {onDelete(item)}>Delete</button>
                            </ul>
                    

                        )
                    }
                })}
            </div>
        )

    )

    return (
        <Fragment>
        <form className="form">
            <input className="form-control"
            type="text"
            onChange = {(e)=>setItem(e.target.value)}
            value={item}
            placeholder="add details"/>
             <button onClick = {onSubmit} className="btn btn-primary">Add</button>
             {/* {console.table({list})} */}
        </form>
        {/* <p>item:{item},list:{JSON.stringify(list)}</p> */}
        {boolforpopulateList && populateList()}
        {allPage()}
        {activePage()}
        {completedPage()}

        </Fragment>
        
    )
}

export default Form;