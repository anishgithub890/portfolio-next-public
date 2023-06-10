import React from 'react';
import Heading from '../components/Heading';

const ArticleModal = () => {
  return (
    <div>
      <div className="md:flex-row bg-slate-100 rounded-xl p-8 md:p-6 justify-center">
        <p className="font-bold text-center underline underline-offset-2 text-3xl uppercase">
          OOOPS! It's Empty
        </p>
        <p className="font-serif text-center pt-6 text-xl">
          Sorry, the article page is not available at the moment. In the future,
          I will add the article.
        </p>
      </div>
    </div>
  );
};

export default ArticleModal;
