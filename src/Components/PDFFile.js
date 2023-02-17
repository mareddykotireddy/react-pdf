import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";
import jsPDF from "jspdf"
import "jspdf-autotable"

const items = [
    {
        id: 1,
        items: "cars",
       sku: "WF-418",
        qty: 10,
        
      },
      {
        id: 1,
        items: "bikes",
       sku: "WF-418",
        qty: 10,
        
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
       {
        id: 1,
        items: "koti",
       sku: "WF-418",
        qty: 10,
      },
      
    ]
    const columns = [
        { title: "items", field: "items", },
        { title: "sku", field: "sku", },
        { title: "qty", field: "qty", type: "numeric" }
      
      ]

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
    const doc=new jsPDF()
    doc.text("ITEMS",20,10)
    doc.autoTable({
        columns: columns.map(col => ({ ...col, dataKey: col.field })),
        body: items,
        header:'some Text'
      })

    
    doc.save("table.pdf")
  return (
    <Document>
      <Page>
        
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;

