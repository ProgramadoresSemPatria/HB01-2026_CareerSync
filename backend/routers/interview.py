from fastapi import APIRouter, Depends
from fastapi.responses import Response

from models.schemas import TTSRequest
from services.tts_service import TTSService

router = APIRouter(prefix="/interview", tags=["interview"])


@router.post("/tts")
async def text_to_speech(
    req: TTSRequest,
    tts_svc: TTSService = Depends(),
) -> Response:
    audio_bytes = await tts_svc.synthesize(req.question_text, req.voice)
    return Response(content=audio_bytes, media_type="audio/mpeg")
