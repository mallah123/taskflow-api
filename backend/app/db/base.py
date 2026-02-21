from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

# Import models so they are registered
from app.models.user import User
from app.models.task import Task