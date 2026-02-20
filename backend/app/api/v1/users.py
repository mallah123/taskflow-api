from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.api.deps import get_db, admin_required, get_current_user
from app.models.user import User
router = APIRouter()

@router.get("/")
def get_all_users(
    db: Session = Depends(get_db),
    admin: User = Depends(admin_required)
):
    return db.query(User).all()
    query = db.query(Task).filter(Task.owner_id == current_user.id)

    total = query.count()
    tasks = query.offset(skip).limit(limit).all()

    return {
        "total": total,
        "items": tasks
    }