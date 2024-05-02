import { API, graphqlOperation } from 'aws-amplify';
import { createShare } from './graphql/mutations';
import React from 'react';
import Footer from '../Footer/Footer';

const ShareFile = () => {
    const shareFile = async (userId, fileId) => {
        const shareDetails = { userId, fileId };
        try {
          await API.graphql(graphqlOperation(createShare, { input: shareDetails }));
          console.log('File shared successfully');
        } catch (error) {
          console.error('Error sharing file', error);
        }
      };
    return (
        
            
        <Footer/>
    );
}

export default ShareFile;

