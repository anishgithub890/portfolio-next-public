import React from 'react';
interface AnimatedTextProps {
  text: any;
  className: any;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-between text-center overflow-hidden">
      <h1
        className={`inline-block w-full text-black font-bold capitalize text-8xl ${className}`}
      >
        {text.split(' ').map((word: any, index: any) => (
          <span key={word + '-' + index} className="inline-block">
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
