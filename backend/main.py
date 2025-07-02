from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI()

class users(BaseModel):
    user: str
    password: str

@app.post("/registration")
async def registration(self: users):
    return

@app.get("/authorisation")
async def authorisation(self: users, past ):
    return

@app.post("/chat{id}")
async def chating(text):
    await 