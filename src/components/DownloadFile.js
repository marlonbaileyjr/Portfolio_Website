import React from 'react';

function DownloadButton({ url, filename }) {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  };

  return (
    <button onClick={handleClick}>
      Download Resume
    </button>
  );
}

export default DownloadButton;
