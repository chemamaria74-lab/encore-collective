from fastapi import APIRouter

router = APIRouter()


@router.get("")
def list_garments() -> dict[str, list]:
    return {"items": []}
