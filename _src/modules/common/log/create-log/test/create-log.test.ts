import { LogModel } from '../model/log.model';


describe('Creation of logs', () => {

  test('Should create a log', () => {
    const log = new LogModel();
    log.processName = 'Process 1';
    log.infoLog = {
      "test": "Hello"
    };
    expect(log.processName).toBe('Process 1');
    expect(log.infoLog).toEqual({ "test": "Hello" });

  });

  test('Should not create a log because there is no process name valid', () => {
    try {
      const log = new LogModel();
      log.processName = '';
      log.infoLog = 'Info log 1';

    } catch (error) {
      expect(error.message).toBe('Parameter processName not found');
    }
  });


  test('Should not create a log because info log is null', () => {
    try {
      const log = new LogModel();
      log.processName = 'Process 1';
      log.infoLog = null;

    } catch (error) {
      expect(error.message).toBe('Parameter infoLog not found');
    }
  });

  test('Should not create a log because info log is a string', () => {
    try {
      const log = new LogModel();
      log.processName = 'Process 1';
      log.infoLog = '';

    } catch (error) {
      expect(error.message).toBe('Parameter infoLog not found');
    }
  });

  test('Should not create a log because info log is an empty object', () => {
    try {
      const log = new LogModel();
      log.processName = 'Process 1';
      log.infoLog = {};

    } catch (error) {
      expect(error.message).toBe('Parameter infoLog not found');
    }
  });

});
