from fastapi import FastAPI
from app.db.base import Base
from app.db.session import engine
from app.api.v1 import auth, tasks, users

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Scalable REST API")

app.include_router(auth.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(tasks.router, prefix="/api/v1/tasks", tags=["Tasks"])
app.include_router(users.router, prefix="/api/v1/users", tags=["Users"])