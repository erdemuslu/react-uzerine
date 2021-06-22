import helpers from '../../helpers';

test('should remove duplicate item from array', () => {
  const result = helpers.removeDuplicateItemFromArray(['test1', 'test2', 'test3', 'test3', 'test4', 'test1']);

  expect(result).toEqual(['test1', 'test2', 'test3', 'test4']);
});
