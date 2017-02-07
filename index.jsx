import React, { PropTypes } from 'react';
import Html from 'yalo-component-html';
import Page from 'yalo-component-page';
import Navigation from 'yalo-component-navigation';

export default {
  html(data) {
    return <Html {...data} />;
  },
  page(data) {
    return <Page components={data} />;
  },
  renderHtml(data, key) {
    return <div dangerouslySetInnerHTML={JSON.parse(data)} key={key} />;
  },
  navigation(data, key) {
    return <Navigation {...JSON.parse(data)} key={key} />;
  },
};
