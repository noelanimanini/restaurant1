import React from 'react'
import menu from './ALOHA_PLATES.pdf'
import { Document, Page, pdfjs } from "react-pdf";
import './menu.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Menu() {
  return (
    <div className="menuParent">
        <Document file={menu} onContextMenu={(e) => e.preventDefault()} className="documentParent">
            <Page pageNumber={1} />
        </Document>
        {/* <embed
        src={menu + "#toolbar=0"}
        type="application/pdf"
        height={"100%"}
        width={"100%"}
        /> */}

    </div>
  )
}

export default Menu