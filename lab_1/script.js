class User {
  constructor(id, name, email, phone) {
    this.id = id; // ID користувача
    this.name = name; // Ім'я користувача
    this.email = email; // Електронна пошта користувача
    this.phone = phone; // Телефонний номер користувача
  }
  // Інші методи...
}

class Project {
  constructor(id, name, description) {
    this.id = id; // ID проекту
    this.name = name; // Назва проекту
    this.description = description; // Опис проекту
    this.users = []; // Список користувачів у проекті
    this.admin = null; // Адміністратор проекту
  }

  addUser(user) {} // Додати користувача до проекту
  removeUser(user) {} // Видалити користувача з проекту
  setAdmin(user) {} // Встановити адміністратора проекту
  // Інші методи...
}

class Task {
  constructor(id, description, assignedUser) {
    this.id = id; // ID завдання
    this.description = description; // Опис завдання
    this.assignedUser = assignedUser; // Призначений користувач
    this.state = "new"; // Стан завдання
    this.lastChangeTime = null; // Час останньої зміни
    this.lastChangeUser = null; // Користувач, який змінив стан
  }

  changeState(newState, user) {} // Змінити стан завдання
  assignUser(user) {} // Призначити завдання користувачу
  // Інші методи...
}

// Інтерфейс стратегій сповіщення
class NotificationStrategy {
  send(message, user) {} // Відправити сповіщення
}

class EmailNotificationStrategy extends NotificationStrategy {
  send(message, user) {} // Відправити сповіщення електронною поштою
}

class SMSNotificationStrategy extends NotificationStrategy {
  send(message, user) {} // Відправити SMS-сповіщення
}

class MessengerNotificationStrategy extends NotificationStrategy {
  send(message, user) {} // Відправити сповіщення через Messenger
}

class NotificationService {
  constructor() {
    this.strategy = null; // Вибрана стратегія сповіщення
  }

  setStrategy(strategy) {} // Встановити стратегію сповіщення
  sendNotification(message, user) {} // Відправити сповіщення
}

class Logger {
  logTaskChange(task, user) {} // Записати зміну завдання у лог
}

class ProjectManagementService {
  constructor(notificationService, logger) {
    this.notificationService = notificationService;
    this.logger = logger;
  }

  addTaskToUser(task, user) {} // Додати завдання користувачу
  addUserToProject(user, project) {} // Додати користувача до проекту
}

// Приклад використання системи (створення об'єктів, встановлення залежностей тощо)
// Створення екземплярів сервісів сповіщень та логування
const notificationService = new NotificationService();
const logger = new Logger();

// Встановлення конкретної стратегії сповіщення
notificationService.setStrategy(new EmailNotificationStrategy()); // Можна змінити на SMS або Messenger

// Створення сервісу управління проектами з необхідними залежностями
const projectManagementService = new ProjectManagementService(
  notificationService,
  logger
);

// Створення екземплярів користувачів, проектів, завдань
let user1 = new User(1, "Anton", "anton@example.com", "1234567890");
let user2 = new User(2, "Maria", "maria@example.com", "0987654321");
let project = new Project(1, "Новий Проект", "Опис нового проекту");
let task1 = new Task(1, "Розробити інтерфейс", user1);

// Використання сервісу для додавання користувачів і завдань
projectManagementService.addUserToProject(user1, project);
projectManagementService.addTaskToUser(task1, user1);
