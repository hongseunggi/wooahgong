from dataclasses import dataclass, asdict
from os import path, environ
import json

base_dir = path.dirname(path.dirname(path.dirname(path.abspath(__file__))))


@dataclass
class Config:
    """
    기본 Configuration
    """
    BASE_DIR = base_dir

    # DB 환경설정
    DB_POOL_RECYCLE: int = 900
    DB_ECHO: bool = True
    SECRET_FILE = path.join(path.dirname(path.dirname(path.dirname(path.abspath(__file__)))), 'secret.json')
    secrets = json.loads(open(SECRET_FILE).read())
    DB = secrets["DB"]
    DB_URL: str = f"mysql+pymysql://{DB['USER']}:{DB['PASSWORD']}@{DB['HOST']}:{DB['PORT']}/{DB['NAME']}"
    
    # JWT 설정
    JWT = secrets["JWT"]
    JWT_SECRET = JWT["SECRET_KEY"]
    JWT_ALGORITHM = JWT["ALGORITHM"]

@dataclass
class LocalConfig(Config):
    # 로컬 환경설정
    PROJ_RELOAD: bool = True
    # Cross Origin설정
    ALLOW_SITE = ["*"]



@dataclass
class ProdConfig(Config):
    # 배포 환경설정
    PROJ_RELOAD: bool = False
    # Cross Origin설정
    ALLOW_SITE = ["*"]


def conf():
    """
    환경 불러오기
    :return:
    """
    config = dict(prod=ProdConfig(), local=LocalConfig())
    return config.get(environ.get("API_ENV", "local"))