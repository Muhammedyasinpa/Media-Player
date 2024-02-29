import React from 'react'
import { useState } from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';


function AddVideo({setUploadVideoResponse}) {
  const [UploadVideo,setUploadVideo]=useState({
    caption:"",imageUrl:"",youtubeLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUploadVideo({...UploadVideo,caption:"",imageUrl:"",youtubeLink:""})
  }
  const handleShow = () => setShow(true);

  const handleUpload= async()=>{
//store upload video in http://localhost:3000/videos
const {caption,imageUrl,youtubeLink}=UploadVideo
if(caption&&imageUrl&&youtubeLink){
  //proceed to store video from localhost5173 home to http://localhost:3000/videos
  const result = await uploadVideoAPI(UploadVideo)
  console.log(result);
  if(result.status>=200 && result.status<300){
    alert(`Video '${result.data.caption}'  uploaded successfully!!!`)
    setUploadVideoResponse(result.data)
    handleClose()
  }else{
    alert("API called Failed... Please try after sometime!!!")
  }
}else{
  alert("please fill the form completely!!!")
}
  }

  console.log(UploadVideo);

  const getYoutubeEmbedLink=(link)=>{
      if(link.includes("v=")){
        let videoId=link.split("v=")[1].slice(0,11)
        setUploadVideo({...UploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      }
      else{
        setUploadVideo({...UploadVideo,youtubeLink:""})
        alert("Input proper youtube link")
      }
  }
  console.log(UploadVideo);
  return (
    <>
    <div className="d-flex">
      <h4 style={{height:'40px'}}>Upload A Video</h4>
      <button onClick={handleShow} style={{width:'40px',height:'40px'}} className='btn bg-secondary ms-2= rounded-circle mb-5 ps-2'><i class="fa-solid fa-cloud-arrow-up"></i></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Enter The Following Details!!!</p>
       <div className='border rounded border-secondary p-2'>
          <FloatingLabel
          controlId="floatingInputCaption"
          label="Video Caption"
          className="mb-3"
        >
          <Form.Control value={UploadVideo.caption}  onChange={e=>setUploadVideo({...UploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputImg"
          label="Image Url"
          className="mb-3"
        >
          <Form.Control value={UploadVideo.imageUrl} onChange={e=>setUploadVideo({...UploadVideo,imageUrl:e.target.value})} type="text" placeholder="Image Url" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputVideo"
          label="Youtube Video Link"
          className="mb-3"
        >
          <Form.Control onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube Video Link" />
        </FloatingLabel>
       </div>

     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info'  variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  )
}

export default AddVideo