from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.api.deps import get_db, get_current_user
from app.models.task import Task
from app.schemas.task import TaskCreate

router = APIRouter()

@router.post("/")
def create_task(task: TaskCreate,
                db: Session = Depends(get_db),
                current_user = Depends(get_current_user)):

    new_task = Task(
        title=task.title,
        description=task.description,
        owner_id=current_user.id
    )

    db.add(new_task)
    db.commit()
    db.refresh(new_task)

    return new_task

@router.get("/")
def get_tasks(db: Session = Depends(get_db),
              current_user = Depends(get_current_user)):

    return db.query(Task).filter(Task.owner_id == current_user.id).all()