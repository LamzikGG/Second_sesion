from sqlalchemy import String, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase
from users import users
class Base(DeclarativeBase):
    pass

class groupe(Base):
    __tablename__ = "groupe"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name_groupe: Mapped[str] = mapped_column(String(30))
    owner_users: Mapped[str] = mapped_column(ForeignKey("users.user"))

