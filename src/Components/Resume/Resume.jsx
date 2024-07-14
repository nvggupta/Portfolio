import React from "react";
import { Link } from "react-router-dom";
import "../Home/Header.css"
function DownloadButton() {
  const handleDownload = () => {
    const pdfUrl = "../../../Assets/resume.pdf"; 
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <div className="flex justify-center items-center flex-col section1 gap-5">
    <Link to="./resume">
      <button onClick={handleDownload} className="btn text-white text-center w-full bg-red-700 rounded-md border">
        Download File
      </button>
    </Link>
    <img src="../../../Assets/resume.png" className="h-4/5"></img>
    </div>
    </>
  );
}

export default DownloadButton;
