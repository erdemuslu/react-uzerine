function posts() {
  console.log('get posts...');
  return new Promise(resolve => setTimeout(() => {
    console.log('fetched posts');
    resolve({
      posts: [
        {
          title: 'Example title 1',
          author: 'Example author'
        },
        {
          title: 'Example title 2',
          author: 'Example author'
        }
      ],
      user: [
        {
          title: 'User1'
        },
        {
          title: 'User2'
        }
      ]
    });
  }, 3000));
}

export default function wrapPosts() {
  let status = 'pending';
  let result;
  const suspender = posts().then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );

  return {
    get(type) {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result[type];
      }

      return result[type];
    }
  };
}
