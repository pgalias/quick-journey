import { sprintf } from './string.helper';

describe('string helper', () => {
  describe('format function', () => {
    let string;

    beforeEach(() => {
      string = sprintf('Hello {world}! I am {parametrized}');
    });

    it('should format string all parameters inside curly brackets by given values', () => {
      expect(string({
        world: 'Mark',
        parametrized: 16
      })).toEqual('Hello Mark! I am 16');
    });

    it('should format string left unchanged parameters when its value was not provided', () => {
      expect(string({ world: 'Mark' })).toEqual('Hello Mark! I am {parametrized}');
    });

    it('should left unchanged string when any value was provided', () => {
      expect(string()).toEqual('Hello {world}! I am {parametrized}');
    });
  });
});
