import React ,{useState} from 'react'




function TestImage() {

    const [previewSource,setPreviewSource]=useState();

    // var previewSource="";

    var fileInput;
    const handelFileInputChange=(e)=>{
        console.log("file changed");
        const file=e.target.files[0];
        previewFile(file);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onloadend = () => {
            setPreviewSource(reader.result);
            console.log(previewSource);
        }
    }

    const uploadImage=async ()=>{
        if(!previewSource)
        {
            console.log("empty file");
            return;
        }
        try
        {
            await fetch('/api/upload',{
                method:'POST',
                body:JSON.stringify({data:previewSource}),
                headers:{'Content-type':'application/json'}
            })
        }
        catch(error)
        {
            console(error);
        }
    }

    return (
        <div>
            <form onSubmit={uploadImage}>
                <input type="file" name="Choose File" onChange={handelFileInputChange} value={fileInput}></input>
                <input type="submit"></input>
            </form>
            {previewSource && (
                <img src={previewSource} style={{width:'20rem'}}></img>
                )}
               
        </div>
    )
}

export default TestImage
