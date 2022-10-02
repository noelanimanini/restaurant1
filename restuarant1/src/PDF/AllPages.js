import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import './AllPages.css'

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  // <Page key={`page_${index + 1}`} pageNumber={index + 1} />

  let ele = document.getElementsByClassName('AllPagesParent')

  const seePages = () => (
   Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} id="AllPagesParent"/>
      ))
  )
  
  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}  
    >
     {seePages()} 
     
    
    </Document>
  );
  
}