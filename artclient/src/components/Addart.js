import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArt, updateArt, deleteArt } from "../Features/ArtSlice";
import axios from "axios";
import { Link } from 'react-router-dom';

function AddArt() {
  const user = useSelector((state) => state.users.user);
  const [img, setImg] = useState("");
  const [text, setText] = useState("");
  const [price, setPrice] = useState(0);
  const [forSale, setForSale] = useState(false);
  const [date, setDate] = useState(new Date());
  const [submittedArt, setSubmittedArt] = useState([]);
  const [editingArtId, setEditingArtId] = useState(null);
  const dispatch = useDispatch();
  const { isSuccess, art } = useSelector((state) => state.art);

  useEffect(() => {
    if (isSuccess) {
      const updatedSubmittedArt = [...submittedArt, art];
      setSubmittedArt(updatedSubmittedArt);
      // localStorage.setItem("submittedArt", JSON.stringify(updatedSubmittedArt));
    }
  }, [isSuccess, art]);

  useEffect(() => {
    const storedSubmittedArt = JSON.parse(localStorage.getItem("submittedArt"));
    if (storedSubmittedArt) {
      setSubmittedArt(storedSubmittedArt);
    }
  }, []);

  const handleAdd = async () => {
    try {
      await dispatch(addArt({ img, text, price, forSale, date }));
      setImg("");
      setText("");
      setPrice(0);
      setForSale(false);
      setDate(new Date());
    } catch (error) {
      console.error("Failed to add art:", error.message);
      alert("Failed to add art. Please try again.");
    }
  };
  
  const handleUpdate = async () => {
    try {
      if (editingArtId) {
        await dispatch(updateArt({ id: editingArtId, artData: { img, text, price, forSale, date } }));
        const updatedArt = { _id: editingArtId, img, text, price, forSale, date };
        const updatedSubmittedArt = submittedArt.map(art => (art._id === editingArtId ? updatedArt : art));
        setSubmittedArt(updatedSubmittedArt);
        // localStorage.setItem("submittedArt", JSON.stringify(updatedSubmittedArt));
        setEditingArtId(null);
        setImg("");
        setText("");
        setPrice(0);
        setForSale(false);
        setDate(new Date());
      } else {
        alert("No art selected for update.");
      }
    } catch (error) {
      console.error("Failed to update art:", error.message);
      alert("Failed to update art. Please try again.");
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await dispatch(deleteArt(id));
      const updatedSubmittedArt = submittedArt.filter((art) => art._id !== id);
      setSubmittedArt(updatedSubmittedArt);
      // localStorage.setItem("submittedArt", JSON.stringify(updatedSubmittedArt));
    } catch (error) {
      console.error("Failed to delete art:", error.message);
      alert("Failed to delete art. Please try again.");
    }
  };
  
  const handleEdit = (editedArt) => {
    setImg(editedArt.img);
    setText(editedArt.text);
    setPrice(editedArt.price);
    setForSale(editedArt.forSale);
    setDate(new Date(editedArt.date));
    setEditingArtId(editedArt._id);
  };
  
  const [arts, setArts] = useState([]);

  useEffect(() => {
    // Fetch all arts when component mounts
    axios.get("http://localhost:3002/arts")
      .then(response => setArts(response.data))
      .catch(error => console.error("Fetch arts error:", error));
  }, []);
  return (
    <header className="h-100 min-vh-100 d-flex align-items-center justify-content-center text-light shadow" style={{ backgroundColor: 'rgba(22, 22, 22)' }}>
      <div className="container my-10" style={{ marginTop: '400px' }}>
        <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: "30px", textAlign: "left" }}>
          <h2>{user.name}</h2>
  <label style={{ color: "white", marginBottom: "10px", display: "block" ,fontFamily: "'Playfair Display', serif"}}>Enter Img URL:</label>
  <div style={{ position: "relative", marginBottom: "20px" }}>
    <div style={{ borderBottom: "1px solid white", display: "inline-block", width: "100%" }}>
      <input
        type="text"
        id="imgInput"
        placeholder="Image URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        style={inputStyle}
      />
    </div>
  </div>
</div>

<div style={{ marginBottom: "30px", textAlign: "left" }}>
  <label htmlFor="textInput" style={{ color: "white", marginBottom: "10px", display: "block" ,fontFamily: "'Playfair Display', serif"}}>Name of your Art:</label>
  <div style={{ position: "relative", marginBottom: "20px" }}>
    <div style={{ borderBottom: "1px solid white", display: "inline-block", width: "100%" }}>
      <input
        type="text"
        id="textInput"
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={inputStyle}
      />
    </div>
  </div>
</div>

<div style={{ marginBottom: "30px", textAlign: "left" }}>
  <label htmlFor="priceInput" style={{ color: "white", marginBottom: "10px", display: "block",fontFamily: "'Playfair Display', serif" }}>Price:</label>
  <div style={{ position: "relative", marginBottom: "20px" }}>
    <div style={{ borderBottom: "1px solid white", display: "inline-block", width: "100%" }}>
      <input
        type="number"
        id="priceInput"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        style={inputStyle}
      />
    </div>
  </div>
</div>

<div style={{ marginBottom: "30px", textAlign: "left" }}>
  <label htmlFor="dateInput" style={{ color: "white", marginBottom: "10px", display: "block" ,fontFamily: "'Playfair Display', serif"}}>Date of your Art:</label>
  <div style={{ position: "relative", marginBottom: "20px" }}>
    <div style={{ borderBottom: "1px solid white", display: "inline-block", width: "100%" }}>
      <input
        type="date"
        id="dateInput"
        value={date.toISOString().substr(0, 10)}
        onChange={(e) => setDate(new Date(e.target.value))}
        style={inputStyle}
      />
    </div>
  </div>
</div>

<div>
  <label style={{ ...labelStyle, marginBottom: '10px' ,fontFamily: "'Playfair Display', serif"}}>
    For Sale:{" "}
    <input
      type="checkbox"
      checked={forSale}
      onChange={(e) => setForSale(e.target.checked)}
      style={{ verticalAlign: 'middle', marginRight: '5px' }}
    />
  </label>
</div>
<div>
  <button type="button" onClick={handleAdd} style={{fontFamily: "'Playfair Display', serif",padding: '8px',borderRadius: '4px',color: '#fff',border: 'none',marginRight: '8px',backgroundColor: 'rgba(165, 162, 63, 0.525)',}}>Add Art</button>
  <button type="button" onClick={handleUpdate} style={{fontFamily: "'Playfair Display', serif",padding: '8px',borderRadius: '4px',color: '#fff',border: 'none',marginRight: '8px',backgroundColor: 'rgba(80, 110, 22, 0.525)',}}>Update Art</button>
</div>
<div>
          {arts.map((art, index) => (
            <div key={index} style={submittedArtStyle}>
              <img src={art.img} alt={`Art ${index}`} />
              <p>{art.text}</p>
              <p>Price: {art.price}</p>
              <p>For Sale: {art.forSale ? 'Yes' : 'No'}</p>
              <p>Date: {new Date(art.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
        </form>

        <div>
          {submittedArt.map((art, index) => (
            <div key={index} style={submittedArtStyle}>
              <img src={art.img} alt={`Submitted Art ${index}`} />
              <p>{art.text}</p>
              <p>Price: {art.price}</p>
              <p>For Sale: {art.forSale ? 'Yes' : 'No'}</p>
              <p>Date: {new Date(art.date).toLocaleDateString()}</p>
              <button onClick={() => handleEdit(art)} style={editButtonStyle}>Edit</button>
              <button onClick={() => handleDelete(art._id)} style={deleteButtonStyle}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default AddArt;

// CSS Styles
const labelStyle = {
  color: 'white'
};

const inputStyle = {
  padding: "10px",
  width: "100%",
  border: "none",
  backgroundColor: "transparent",
  color: "white",
  fontFamily: "'Playfair Display', serif",
  outline: "none"
};





const submittedArtStyle = {
  fontFamily: "'Playfair Display', serif",
  marginTop: '20px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px'
  
};

const editButtonStyle = {
  fontFamily: "'Playfair Display', serif",
  marginTop: '10px',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: 'rgba(61, 118, 110, 0.525)',
  color: '#fff',
  cursor: 'pointer'
};

const deleteButtonStyle = {
  fontFamily: "'Playfair Display', serif",
  marginTop: '10px',
  marginLeft: '10px',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: 'rgba(157, 78, 78, 0.525)',
  color: '#fff',
  cursor: 'pointer'
};
