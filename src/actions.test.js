import {
  tick,
  resetTimer,
  clickDecrease,
  clickIncrease,
} from './actions';

describe('actions', () => {
  describe('tick', () => {
    it('deducts the time left on the timer by one second', () => {
      const prevState = {
        timeLeft: 59,
      };

      const newState = {
        timeLeft: 58,
      };

      expect(tick(prevState)).toEqual(newState);
    });

    it('changes the mode from "stop" to "work" when clicking timer button', () => {
      const prevState = {
        mode: 'stop',
        timeLeft: 1500,
      };

      const newState = {
        mode: 'work',
        timeLeft: 1500,
      };

      expect(tick(prevState)).toEqual(newState);
    });

    it('changes the mode from "work" to "break" when the work time ends', () => {
      const prevState = {
        mode: 'work',
        timeLeft: 0,
      };

      const newState = {
        mode: 'break',
        timeLeft: 300,
      };

      expect(tick(prevState)).toEqual(newState);
    });

    it('changes the mode from "break" to "stop" when the break time ends', () => {
      const prevState = {
        mode: 'break',
        status: 'on',
        timeLeft: 0,
      };

      const newState = {
        mode: 'stop',
        status: 'off',
        timeLeft: 1500,
      };

      expect(tick(prevState)).toEqual(newState);
    });
  });

  describe('resetTimer', () => {
    it('resets the timer', () => {
      const newState = {
        timeLeft: 1500,
      };

      expect(resetTimer()).toEqual(newState);
    });
  });

  describe('clickDecrease', () => {
    it('decreases the default timer by 60 seconds', () => {
      const prevState = {
        timeLeft: 120,
      };

      const newState = {
        timeLeft: 60,
      };

      expect(clickDecrease(prevState)).toEqual(newState);
    });
  });

  describe('clickIncrease', () => {
    it('increases the default timer by 60 seconds', () => {
      const prevState = {
        timeLeft: 60,
      };

      const newState = {
        timeLeft: 120,
      };

      expect(clickIncrease(prevState)).toEqual(newState);
    });
  });
});
