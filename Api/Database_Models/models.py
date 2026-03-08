from sqlalchemy import Column,Integer,String,DateTime,ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from Database.db import Base

# we are defining the models
class Divisions(Base):

    __tablename__ = "divisions"
    id = Column(Integer,primary_key=True,index=True , autoincrement=True)
    division_name = Column(String(500),nullable=False)

class Users(Base):
    __tablename__ = "users"
    user_id = Column(Integer, primary_key=True,index=True,)


# class COMPANY_MASTER_MODEL(Base):
#     __tablename__ = "COMPANY_MASTER"

#     COMP_ID=Column(Integer,primary_key=True,autoincrement=True)
#     COMP_NAME=Column(String(10),nullable=False)
#     COMP_CODE = Column(String(10),nullable=False)
#     STATUS = Column(Integer)
#     CREATED_AT=Column(DateTime, server_default=func.now())
#     # server_default=func.now() → DB automatically fills current date & time
#     # when a new row is inserted — you never have to set it manually

#     CREATED_BY=Column(String(100),nullable=False)
#     MODIFIED_AT=Column(DateTime, server_default=func.now())
#     MODIFIED_BY=Column(String(100),nullable=False)
#     DIVISION_MASTER =relationship("DIVISION_MASTER_MODEL", back_populates="COMPANY_MASTER_MODEL")



# class DIVISION_MASTER_MODEL(Base):
#     __tablename__ = "DIVISION_MASTER"

#     DIV_ID=Column(Integer,primary_key=True,autoincrement=True)
#     COMP_ID= Column(Integer, ForeignKey("COMP_ID"))
#     DIV_NAME=
#     DIV_CODE=
#     STATUS = Column(Integer)
#     CREATED_AT=Column(DateTime, server_default=func.now())
#     # server_default=func.now() → DB automatically fills current date & time
#     # when a new row is inserted — you never have to set it manually
#     CREATED_BY=Column(String(100),nullable=False)
#     MODIFIED_AT=Column(DateTime, server_default=func.now())
#     MODIFIED_BY=Column(String(100),nullable=False)

#     COMPANY_MASTER= relationship("COMPANY_MASTER_MODEL",back_populates="DIVISION_MASTER")

        




# variable_name = relationship("ModelClassName", back_populates="variable_in_other_model")
#    ↑                              ↑                               ↑
# how you access it          CLASS name of               must match variable name
# in your code               related model               defined in the other model