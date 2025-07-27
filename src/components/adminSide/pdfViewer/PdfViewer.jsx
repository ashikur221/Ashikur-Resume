import React from 'react';

const PdfViewer = () => {
  const pdfUrl = "https://res.cloudinary.com/deifi77os/raw/upload/v1727459763/lxtw1ph1pnhhexvnmrpb.pdf";

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Project PDF Viewer</h1>
      <iframe
        src={pdfUrl}
        className="w-full h-[600px] border border-black" // Tailwind for responsive width and height
        frameBorder="0"
        allowFullScreen
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default PdfViewer;
