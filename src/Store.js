import {
  action, decorate, observable, runInAction,
} from 'mobx';

import LyricsService from './Service';

function Store() {
  this.name = 'Ali';
  this.status = '';
  this.lyricsData = '';
  this.LyricsService = LyricsService;

  this.updateName = (name) => {
    this.name = name;
  };

  this.getLyrics = async ({ artist, title }) => {
    try {
      this.status = 'loading';
      const result = await this.LyricsService.get({ artist, title });

      runInAction(() => {
        this.status = 'done';
        this.lyricsData = result.lyrics.split('\n').join('<br />');
      });
    } catch (err) {
      runInAction(() => {
        this.status = 'error';
        this.data = '';
      });
    }
  };
}

decorate(Store, {
  name: observable,
  status: observable,
  lyricsData: observable,
  updateName: action,
  getLyrics: action,
});

export default new Store();
