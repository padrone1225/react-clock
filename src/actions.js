/* eslint-disable  import/prefer-default-export */

export function tick(prevState) {
  const { mode, timeLeft } = prevState;

  if (mode === 'stop' && timeLeft === 1500) {
    return {
      mode: 'work',
      timeLeft: 1500,
    };
  }

  if (mode === 'work' && timeLeft === 0) {
    return {
      mode: 'break',
      timeLeft: 300,
    };
  }

  if (mode === 'break' && timeLeft === 0) {
    return {
      mode: 'stop',
      status: 'off',
      timeLeft: 1500,
    };
  }

  return {
    timeLeft: timeLeft - 1,
  };
}

export function resetTimer() {
  const { timeLeft } = this.state;

  if (timeLeft !== 1500) {
    this.setState({
      timeLeft: 1500,
    });
  }
}
