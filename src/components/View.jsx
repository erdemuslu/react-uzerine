import React from 'react';
import { inject, observer } from 'mobx-react';

const View = (observer(({ status, lyricsData }) => (
  <div>
    <h1>Sarki sozu:</h1>
    <p>{status === 'loading' && 'Yukleniyor...'}</p>
    <p>{status === 'error' && 'Bir hata olustu'}</p>
    <p dangerouslySetInnerHTML={{ __html: status === 'done' ? lyricsData : '' }} />
  </div>
)));

export default inject((stores) => ({
  status: stores.Store.status,
  lyricsData: stores.Store.lyricsData,
}))(View);
