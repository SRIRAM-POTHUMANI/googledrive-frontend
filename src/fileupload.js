import { useState} from 'react';

export function MyDriveUpload() {
  const [filename, setfilename] = useState("");
  const [filepath, setfilepath] = useState("");
  const [filetype, setfiletype] = useState("");
  var FILE={
    filename: filename,
    filepath: filepath,
    filetype: filetype
  }
  const addFile = () => {
    console.log(FILE);
    fetch("http://localhost:5000/userfiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(FILE)
    })
  };

    return (
      <div className="container">

       File Path Upload
       <div class="input-group mb-4 container">
         <div class="input-group mb-4 container"></div>
       <input type="text" class="form-control w-50" id="fileName" placeholder="File Name" onChange={(event) => setfilename(event.target.value)}/>
       <div class="input-group mb-4 container"></div><input type="text" class="form-control w-50" id="filePath" placeholder="Place your File URL" onChange={(event) => setfilepath(event.target.value)}/>
  <select class="form-select" id="fileType" onChange={(event) => setfiletype(event.target.value)} aria-label="Example select with button addon">
    <option selected>Choose your file type...</option>
    <option value="image">Image</option>
    <option value="video">Video</option>
    <option value="document">Document</option>
  </select>
</div>
<div class="input-group mb-4 centralise">
<button type="button w-5" class="btn btn-primary" onClick={addFile}>Upload</button>
</div>
      </div>
    )
          }