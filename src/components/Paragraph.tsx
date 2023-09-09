import React from 'react';

interface ParagraphProps {
  paragraph: string;
}

function Paragraph({ paragraph }: ParagraphProps) {
  return <p className='text-sm text-gray-600 text-justify'>{paragraph}</p>;
}

export default Paragraph;