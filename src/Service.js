function LyricsService() {
  this.url = 'https://api.lyrics.ovh/v1/';

  this.get = async ({ artist = '', title = '' }) => {
    const response = await fetch(`${this.url}${artist}/${title}`);
    return response.json();
  };
}

export default new LyricsService();
