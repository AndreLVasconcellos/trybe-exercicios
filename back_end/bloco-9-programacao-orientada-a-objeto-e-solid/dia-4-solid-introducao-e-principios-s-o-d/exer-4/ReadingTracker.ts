// ReadingTracker.ts

// import EmailNotification from './EmailNotification';
import ConsoleNotification from './ConsoleNotification';
import Notificator from './Notificator';

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
    // O construtor deixa de instanciar um novo objeto do tipo Notificator
  // e agora passa a receber ele como parâmetro
  constructor(
    readingGoal: number, 
    public notificator: Notificator = new ConsoleNotification('console'),
    ) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
  // Aqui viriam mais métodos, que fogem o escopo deste exercício
}