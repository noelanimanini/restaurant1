import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import './AllPages.css'

export default function AllPages(props) {

  const { pdf } = props;

  // <Page key={`page_${index + 1}`} pageNumber={index + 1} />

 
  
  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
    >
     <Page key={1} pageNumber={1} className="AllPagesParent"/>
     <Page key={2} pageNumber={2} className="AllPagesParent"/>
     <Page key={3} pageNumber={3} className="AllPagesParent"/>
     
    
    </Document>
  );
  
}