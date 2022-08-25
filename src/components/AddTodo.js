import React ,{useState} from 'react'

export default function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submitting= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Please fill the input");
        }
        else{
            props.addTodo(title,desc);
            setTitle="";
            setDesc="";
        }
    }
    return (
        <>
        <h3>Add Todo</h3>
            <form className='container' onSubmit={submitting}>
                <div className="mb-3">
                    <label hmtlfor="tit" className="form-label">Title</label>
                    <input type="text" value={title} className="form-control" onChange={(e)=>setTitle(e.target.value)} id="tit"  />
                </div>
                <div className="mb-3">
                    <label hmtlfor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
