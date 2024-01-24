import React, { useContext, useState } from 'react'
import Img from '../img/img.png'
import Attach from '../img/attach.png'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from "uuid";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleImageUpload = async () => {
    try {
      if (img) {
        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Handle upload progress if needed
          },
          (error) => {
            // Handle upload error
            console.error("Upload error:", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then(async (downloadURL) => {
                await sendMessageWithImage(downloadURL);
              })
              .catch((error) => {
                // Handle download URL retrieval error
                console.error("Error getting download URL:", error);
              });
          }
        );
      }
    } catch (error) {
      // Handle any other potential errors
      console.error("Error:", error);
    }
  };

  const sendMessageWithImage = async (downloadURL) => {
    try {
      await updateFirestoreWithMessage(downloadURL);
      resetInputFields();
    } catch (error) {
      // Handle Firestore update error
      console.error("Firestore update error:", error);
    }
  };

  const updateFirestoreWithMessage = async (downloadURL) => {
    const message = {
      id: uuid(),
      text,
      senderId: currentUser.uid,
      date: Timestamp.now(),
      img: downloadURL,
    };

    const chatDocRef = doc(db, "chats", data.chatId);
    await updateDoc(chatDocRef, {
      messages: arrayUnion(message),
    });

    const userChatDocRef = doc(db, "userChats", currentUser.uid);
    const otherUserChatDocRef = doc(db, "userChats", data.user.uid);

    const updateData = {
      [`${data.chatId}.lastMessage`]: { text },
      [`${data.chatId}.date`]: serverTimestamp(),
    };

    await Promise.all([
      updateDoc(userChatDocRef, updateData),
      updateDoc(otherUserChatDocRef, updateData),
    ]);
  };

  const resetInputFields = () => {
    setText("");
    setImg(null);
  };

  const handleSend = async () => {
    try {
      if (img) {
        handleImageUpload();
      } else {
        await sendMessageWithImage(null);
      }
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
