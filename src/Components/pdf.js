import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const MyPDF = () => (
  <Document>
    <Page>
      <Text>Page 1</Text>
    </Page>
    <Page>
      <Text>Page 2</Text>
    </Page>
  </Document>
);

export default MyPDF;
