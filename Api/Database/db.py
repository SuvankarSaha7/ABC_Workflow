from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base,sessionmaker

DATABASE_URL="postgresql://postgres:postgres%40123@localhost:5432/ABC_Workflow"

if not DATABASE_URL:
    raise ValueError("❌ DATABASE_URL is missing! Add it in Render Environment Variables.")


engine = create_engine(
    DATABASE_URL,    
)

# engine = the actual CONNECTION to your database
# Like picking up the phone and dialing the database
# Without this — your app can't reach the database at all

SessionLocal = sessionmaker(autocommit=False,autoflush=False, bind=engine)
# SessionLocal = a FACTORY that creates sessions
# Session = your workspace to read/write data
#
# autocommit=False → don't save automatically, I'll say when to save
# autoflush=False  → don't sync automatically
# bind=engine      → use the engine (connection) we created above

Base = declarative_base()
# Base = parent class for ALL your database models
# Every table you create (like Divisions) must inherit from Base
# SQLAlchemy uses Base to know which tables exist







