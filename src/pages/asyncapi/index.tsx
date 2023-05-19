import Layout from "@theme/Layout";
import AsyncApiComponent from '@asyncapi/react-component';
import { Flex } from 'rebass';
import React from 'react';

import '@asyncapi/react-component/lib/styles/fiori.css';

export const AsyncApi = () => {
  return (
    <Layout>
      <Flex flexDirection={'column'} margin={'auto'} width={'960px'} mt={'20px'}>
        <AsyncApiComponent schema={{asyncapi: '2.0.0'}} />
      </Flex>
    </Layout>
  );
};

export default AsyncApi
