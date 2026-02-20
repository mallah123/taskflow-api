from loguru import logger
from app.core.logging import logger
logger.info("User created")
logger.add("app.log", rotation="10 MB")