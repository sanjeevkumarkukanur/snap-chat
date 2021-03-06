import { AttachFile, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@material-ui/icons';
import CloseIcon  from '@material-ui/icons/Close';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetCameraImage, selectCameraImage } from './features/cameraSlice';
import './Priview.css';
import { v4 as uuid } from "uuid";
import { db, storage } from "./firebase"
import firebase from 'firebase';


function Priview() {

    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!cameraImage){
            history.replace("/"); 
        }
    }, [cameraImage, history])

    const closePreview = () =>{
        dispatch(resetCameraImage())
        history.replace("/"); 
    }

    const sendPost = () =>{
        const id = uuid();
        const uploadTask = storage
            .ref(`posts/${id}`)
            .putString(cameraImage, "data_url")

        uploadTask.on("state_changed",
        null,
        (error)=>{
            // error fuction
            console.log(error);
        },
        () =>{
            // Complete function
            storage.ref('posts')
            .child(id)
            .getDownloadURL()
            .then((url) => {
                db.collection('posts').add({
                     imageUrl: url,
                     username: "san react",
                     read: false,
                     // profilePic
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),                    

                })
                history.replace("/chats"); 
            })
        }
        )
    }

    return (
        <div className="preview">
            <CloseIcon onClick={closePreview} className="preview__close" />
            <div className="preview__ToolbarRight">
                <TextFields />
                <Create />
                <Note />
                <MusicNote />
                <AttachFile />
                <Crop />
                <Timer />
            </div>
            <img src={cameraImage} alt="" />
            <div onClick={sendPost} className="preview__footer">
                <h2>Send Now</h2>
                <Send fontSize="small" className="preview__SendIcon" />
            </div>
            
        </div>
    )
}

export default Priview;
