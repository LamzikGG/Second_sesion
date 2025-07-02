from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase

class Base(DeclarativeBase):
    pass

class users(Base):
    __tablename__ = "users"

    user: Mapped[str] = mapped_column(String = 30)
    password: Mapped[str] = mapped_column(String = 30)

