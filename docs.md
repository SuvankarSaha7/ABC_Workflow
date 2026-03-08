# ─── 1. IMPORTS ───────────────────────────────────────────────────────────────

from sqlalchemy import create_engine, Column, Integer, String, text
from sqlalchemy.orm import declarative_base, Session

# create_engine  → creates a connection to the database
# Column         → defines a column in a table
# Integer/String → data types for columns
# text           → wraps raw SQL strings safely
# declarative_base → base class all your models will inherit from
# Session        → used to talk to the database (add, query, delete)


# ─── 2. DATABASE CONNECTION ───────────────────────────────────────────────────

engine = create_engine("sqlite:///mydb.sqlite", echo=True)

# create_engine() sets up the connection
# "sqlite:///mydb.sqlite" → use SQLite, store in a file called mydb.sqlite
# echo=True → print all SQL statements to console (great for learning/debugging)

# Other connection strings:
# PostgreSQL → "postgresql://user:password@localhost/dbname"
# MySQL      → "mysql+pymysql://user:password@localhost/dbname"


# ─── 3. DEFINE A MODEL (TABLE) ────────────────────────────────────────────────

Base = declarative_base()
# Base is the "parent class" for all your models
# SQLAlchemy uses it to track all defined tables

class User(Base):                          # User class = "users" table
    __tablename__ = "users"               # actual table name in the database

    id = Column(Integer, primary_key=True)  # id column, auto-increments
    name = Column(String(50))               # name column, max 50 characters
    email = Column(String(100), unique=True)# email column, must be unique
    age = Column(Integer)                   # age column, stores integers

    def __repr__(self):
        # __repr__ defines how the object prints — useful for debugging
        return f"<User(id={self.id}, name={self.name}, email={self.email})>"


# ─── 4. CREATE TABLES ─────────────────────────────────────────────────────────

Base.metadata.create_all(engine)
# metadata holds info about all tables defined above
# create_all(engine) → creates those tables in the database if they don't exist


# ─── 5. INSERT DATA ───────────────────────────────────────────────────────────

with Session(engine) as session:
    # Session is like a "workspace" — changes stay in memory until committed
    # "with" block ensures the session is properly closed after use

    user1 = User(name="Alice", email="alice@example.com", age=30)
    user2 = User(name="Bob",   email="bob@example.com",   age=25)
    user3 = User(name="Carol", email="carol@example.com", age=35)
    # Creating User objects (not saved to DB yet!)

    session.add(user1)           # stage user1 for insert
    session.add_all([user2, user3])  # stage multiple users at once

    session.commit()
    # commit() → saves all staged changes to the database
    # Without this, nothing is actually written!


# ─── 6. QUERY DATA ────────────────────────────────────────────────────────────

with Session(engine) as session:

    # --- Get ALL users ---
    users = session.query(User).all()
    # session.query(User) → SELECT * FROM users
    # .all() → fetch all results as a list
    print(users)

    # --- Filter users ---
    alice = session.query(User).filter(User.name == "Alice").first()
    # .filter() → adds a WHERE clause
    # .first()  → returns only the first match (or None)
    print(alice)

    # --- Filter with multiple conditions ---
    results = session.query(User).filter(User.age > 24, User.age < 36).all()
    # Multiple arguments to filter() are joined with AND
    print(results)

    # --- Order results ---
    ordered = session.query(User).order_by(User.age).all()
    # order_by() → sorts results (ascending by default)
    print(ordered)


# ─── 7. UPDATE DATA ───────────────────────────────────────────────────────────

with Session(engine) as session:

    user = session.query(User).filter(User.name == "Bob").first()
    # fetch the user we want to update

    user.age = 26
    # directly modify the attribute — SQLAlchemy tracks this change

    session.commit()
    # commit() saves the update to the database


# ─── 8. DELETE DATA ───────────────────────────────────────────────────────────

with Session(engine) as session:

    user = session.query(User).filter(User.name == "Carol").first()
    # fetch the user to delete

    session.delete(user)
    # mark the user for deletion

    session.commit()
    # commit() executes the DELETE in the database


# ─── 9. RAW SQL (when needed) ─────────────────────────────────────────────────

with Session(engine) as session:

    result = session.execute(text("SELECT * FROM users"))
    # text() wraps raw SQL safely (prevents SQL injection)
    # execute() runs the SQL directly

    for row in result:
        print(row)  # each row is a tuple-like object