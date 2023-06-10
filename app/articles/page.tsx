import React from 'react';
import ArticleModal from './ArticleModal';
import Container from '../components/Container';
import Footer from '../components/Footer';

const ArticleClient = () => {
  return (
    <div>
      <Container>
        <ArticleModal />
        <Footer />
      </Container>
    </div>
  );
};

export default ArticleClient;
