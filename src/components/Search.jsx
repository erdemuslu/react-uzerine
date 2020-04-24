import React, { useState } from 'react';
import { inject } from 'mobx-react';

const Search = ({ updateName, getLyrics }) => {
  const [value, setValue] = useState({
    title: '',
    artist: '',
  });

  const handleValue = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getLyrics(value);
    setValue({ artist: '', title: '' });
  };

  const handleName = () => {
    updateName('Cemil');
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        aria-label="artist"
        id="artist"
        type="text"
        placeholder="Sanatci ismini giriniz"
        onChange={handleValue}
        value={value.artist}
      />
      <input
        aria-label="title"
        id="title"
        type="text"
        placeholder="Sarki ismini giriniz"
        onChange={handleValue}
        value={value.title}
      />
      <button
        type="button"
        onClick={handleName}
      >
        Ismi Guncelle
      </button>
      <button
        type="submit"
      >
        Ara
      </button>
    </form>
  );
};

export default inject((stores) => ({
  updateName: stores.Store.updateName,
  getLyrics: stores.Store.getLyrics,
}))(Search);
