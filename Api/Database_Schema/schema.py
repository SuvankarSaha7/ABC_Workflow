from pydantic import BaseModel

# Pydantic models define what data looks like going IN and OUT of the API 
# they are totally seperate from Sqlalchemy models


# used when we post the division data
class DivisionCreate(BaseModel):
    division_name:str

class DivisionReponse(BaseModel):
    id:int
    division_name:str

    class Config:
        from_attributes=True
        # orm_mode = True → allows Pydantic to read data from
        # SQLAlchemy objects (not just plain dicts)
        # Without this, FastAPI can't serialize SQLAlchemy objects to JSON