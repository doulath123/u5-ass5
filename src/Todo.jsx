import{useEffect,useState} from "react";
import axios from "axios";

export const Todo=()=>{
    const [text, setText]=useState('');
    const [todos, setTodos]=useState([]);
    const [page, setPage]=useState(1)
    useEffect(()=>{
      getData();
    },[page])
    
   const getData=()=>{
    axios.get(`http://localhost:3000/todos?_limit=3&_page=${page}`).then((res)=>{
        setTodos(res.data)
    })  
   }
    return (
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)}></input>
            <button onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method:"POST",
                    body:JSON.stringify({title:text, status:false}),
                    headers:{
                        "content-type":"application/json"
                    },
                }).then(()=>{
                    getData();
                })
            }}>
                save
            </button>
           {todos.map((e)=>(
                <div key={e.id}>{e.title}
                {e.perchage}
                
               </div>
               
                
               
            ))}
            <br></br>
            <button
             onClick={()=>{
                
                if(page<=1)
                {
                   setPage(1)
                }
                else{
                    setPage(page-1)
                }
                
            }}>prev</button>
            <button
            onClick={()=>{
                setPage(page+1)
            }}>next</button>
        </div>
        
        
    )

}