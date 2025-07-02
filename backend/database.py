from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from models.users import users
from models.groupe import groupe
# Строка подключения
DATABASE_URL = "postgresql+asyncpg://postgres:2909@localhost:5432/Second_session"

# Создаем асинхронный движок
engine = create_async_engine(DATABASE_URL, echo=True)  # echo=True — вывод SQL-запросов в консоль

# Создаем фабрику сессий
async_session = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False
)