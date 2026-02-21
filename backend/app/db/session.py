from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,declartive_base
from app.core.config import settings

engine = create_engine(settings.DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)
Base = declartive_base()