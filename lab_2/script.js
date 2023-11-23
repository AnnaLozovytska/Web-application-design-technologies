class QueryBuilder {
  select(fields) {
    /* ... */
  }
  where(conditions) {
    /* ... */
  }
  limit(limitValue) {
    /* ... */
  }
  getSQL() {
    /* ... */
  }
}

class PostgreSQLQueryBuilder extends QueryBuilder {
  /* Реалізація специфічна для PostgreSQL */
}
class MySQLQueryBuilder extends QueryBuilder {
  /* Реалізація специфічна для MySQL */
}

// Створення об'єкта QueryBuilder для PostgreSQL
const pgQueryBuilder = new PostgreSQLQueryBuilder();
const pgQuery = pgQueryBuilder
    .select(["id", "name"])
    .where("age > 30")
    .limit(10)
    .getSQL();
console.log(pgQuery); // Виведення SQL запиту для PostgreSQL

// Створення об'єкта QueryBuilder для MySQL
const mysqlQueryBuilder = new MySQLQueryBuilder();
const mysqlQuery = mysqlQueryBuilder
    .select(["id", "name"])
    .where("age > 30")
    .limit(10)
    .getSQL();
console.log(mysqlQuery); // Виведення SQL запиту для MySQL