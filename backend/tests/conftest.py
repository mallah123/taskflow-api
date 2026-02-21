import pytest
from app.db.base import Base
from app.db.session import engine

@pytest.fixture(scope="session", autouse=True)
def setup_test_database():
    # create tables before tests
    Base.metadata.create_all(bind=engine)
    yield
    #drop tables  after tests
    Base.metadata.drop_all(bind=engine)




    