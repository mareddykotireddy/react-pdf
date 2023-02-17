import "./App.css";
import React from "react";

// import { PDFDownloadLink } from "@react-pdf/renderer";

// import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";
// import PDFFile from './Components/PDFFile'
import jsPDF from "jspdf"
import "jspdf-autotable"



const App = () => {
  const items = [
    {
      id: 1,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 2,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 3,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 4,
      items: "bikes",
      sku: "WF-418",

      qty: 10,

    },
    {
      id: 5,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 6,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 7,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 8,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 9,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 10,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 11,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 12,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 13,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 14,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 15,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 16,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 17,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 18,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 19,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 20,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 21,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 22,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 23,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 24,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 25,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 26,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 27,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 28,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 29,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 30,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 31,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 32,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 33,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 34,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 35,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 36,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 37,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 38,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 39,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 40,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 41,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 42,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 43,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 44,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 45,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 46,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 47,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 48,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 49,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 50,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 51,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 52,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 53,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 54,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 55,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 56,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 57,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 58,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 59,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 60,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 61,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 62,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 63,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 64,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 65,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 66,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 67,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 68,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 69,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 70,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 71,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 72,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 73,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 74,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 75,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 76,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 77,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 78,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 79,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 80,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 81,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 82,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 83,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 84,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 85,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 86,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 87,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 88,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 89,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 90,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 91,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 92,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 93,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 94,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 95,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 96,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 97,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 98,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 99,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 100,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 101,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 102,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 103,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 104,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 105,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 106,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 107,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 108,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 109,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 110,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 111,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 112,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 113,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 114,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 115,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 116,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 117,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 118,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 119,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 120,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 121,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 122,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 123,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 124,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 125,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 126,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 127,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 128,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 129,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 130,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 1231,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 132,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 133,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 134,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 135,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 136,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 137,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 138,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 139,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 140,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 141,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 142,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 143,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 144,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 145,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 146,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 147,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 148,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 149,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 150,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 151,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 152,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 153,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 154,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 155,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 156,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 157,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 158,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 159,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 160,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 161,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 162,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 163,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 164,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 165,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 166,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 167,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 168,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 169,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 170,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 171,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 172,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 173,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 174,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },
    {
      id: 175,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 176,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 177,
      items: "cars",
      sku: "WF-418",
      qty: 10,

    },

    {
      id: 178,
      items: "bikes",
      sku: "WF-418",
      qty: 10,

    },



  ]

  const handleDownload = () => {

    const pdf = new jsPDF();
    const columns = ["ID", "Items", "SKU", "Qty"];
    const rows = items.map(item => [item.id, item.items, item.sku, item.qty]);
   
  
    let totalQty = 0;
    items.forEach(item => {
      totalQty += item.qty;
    });

    

    pdf.autoTable({
      startY: 20,
      head: [columns],
      body: rows,
      didDrawPage: function (data) {

        const startRow = data.startRow;
        const endRow = data.endRow;
        const rowsOnPage = rows.slice(startRow, endRow);
        const pageQtyOnPage = rowsOnPage.reduce((total, row) => total + row[3], 0);
  

        // Header
        pdf.setFontSize(20);
        pdf.setTextColor(40);
        pdf.text("logo", data.settings.margin.left, 10);
        pdf.text("hello", data.settings.margin.right + 160, 10);
        // pdf.text(str, data.settings.margin.right+180, pageHeight - 10);

        // Footer
        var str = "Page " + pdf.internal.getNumberOfPages();
        var hello = "eabor" ;

        pdf.setFontSize(10);

        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
        var pageSize = pdf.internal.pageSize;
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        pdf.text(hello, data.settings.margin.left, pageHeight - 10);
        pdf.text(str, data.settings.margin.right + 180, pageHeight - 10);
  

      }
    });


    // const footer = "Earbor";


    // const pageCount = pdf.internal.getNumberOfPages();


    // for (let i = 1; i <= pageCount; i++) {
    //   pdf.setPage(i);
    //   pdf.text(footer, pdf.internal.pageSize.width / 2, pdf.internal.pageSize.height - 10);
    // }
    pdf.text(`Total Quantity: ${totalQty}`, pdf.internal.pageSize.width / 2, pdf.internal.pageSize.height - 190);
   const pageCount = pdf.internal.getNumberOfPages();
   
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      const startRow = (i - 1) * 33;
      const endRow = Math.min(i * 33, rows.length);
      const rowsOnPage = rows.slice(startRow, endRow);
      const pageQtyOnPage = rowsOnPage.reduce((total, row) => total + row[3], 0);
      const footerText = `page Quantity: ${pageQtyOnPage}`;
      pdf.text(footerText, pdf.internal.pageSize.width / 2, pdf.internal.pageSize.height - 10);
    }

    pdf.save("table.pdf");
  };
  return (

    <div className="App">

      <button onClick={handleDownload}>Print</button>
    </div>

  );
};

export default App;