import React from 'react';
import style from './Agree.module.css';

type MyProps = {
  open: boolean;
  onClose: (e: any) => void;
};

function AccountPolicy({ open, onClose }: MyProps) {
  const handleStopEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div
      className={open ? `${style.openModal} ${style.modal}` : style.modal}
      onClick={onClose}
      onKeyDown={onClose}
      role="button"
      tabIndex={0}
    >
      {open ? (
        <section className={style.modalForm} onClick={handleStopEvent} onKeyDown={onClose} role="button" tabIndex={0}>
          <header>
            <h3 className={style.title}>우리만아는공간 계정약관</h3>
          </header>
          <main>
            <div className={style.configForm}>
              이용약관 제 1 장 총 칙
              <br />
              제1조 목적
              <br />
              이 약관은 우아공(이하 “회사”)이 제공하는 “우아공”와 관련하여 회사와 이용자 간의 권리와 의무 및 필요한
              사항을 정하는데 그 목적이 있습니다.
              <br />
              <br />
              제 2 조 (용어의 정의)
              <br />
              1. 이 약관에서 사용하는 용어의 정의는 다음과 같습니다<br/>. 1) 우아공 이란
              사용자간 자신만의 공간을 소개하고, 자신이 가보지 못한 다른 사람만의 공간을 추전받는 SNS
              플랫폼입니다<br/>. 2) 이용자란 본 약관에 동의하고 회사가 제공하는 서비스 이용 자격을 부여 받은 자를 의미합니다.
              <br/>. 3) 탈퇴란 이용자가 서비스 이용 계약을 종료하는
              의사표시를 말합니다. <br />
              2. 이 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을 제외하고는 관계 법령에서 정하는 바를 따릅니다.
              <br />
              <br />
              제 3 조 (약관의 효력과 변경)
              <br />
              1. 회사는 서비스의 초기화면에 이 약관을 명시합니다.
              <br />
              2. 이 약관은 이용자가 서비스를 이용함과 동시에 효력이 발생하며, 이 약관에 동의하지 않을 경우 이용자는
              서비스 이용계약을 철회할 수 있습니다. <br />
              3. 회사는 이 약관을 관련 법령에 위배되지 않는 범위에서 변경할 수 있습니다. <br />
              4. 변경된 약관은 적용일 및 변경내용, 변경사유 등을 명시하여 적용일 15일 이전(다만, 이용자에게 불리한
              약관의 개정의 경우에는 적용일 30일 이전)부터 적용일 전일까지 서비스에 고지한 후 적용일부터 효력이
              발생됩니다. <br />
              5. 이용자는 변경된 약관에 동의하지 않을 권리가 있으며, 변경된 약관에 동의하지 않을 경우에는 서비스 이용을
              중단하고 탈퇴할 수 있습니다. <br />
              6. 변경된 약관 공지 시 이용자가 회사에 명시적으로 거부의 의사표시를 하지 않거나 또는 이용자가 변경된
              이용약관의 적용일 이후에도 서비스를 계속 사용하는 경우에는 변경된 약관에 동의한 것으로 간주합니다.
              <br />
              <br />
              제 2 장 [이 용] <br />
              제 4 조 (이용 계약의 성립)
              <br />
              1. 서비스 이용계약은 서비스를 이용하려는 자가 본 약관에 동의하고 서비스를 이용함으로써 성립됩니다. <br />
              2. 청소년(만 19세 미만인 자)이나 피한정후견인, 피성년후견인이 서비스를 이용하려면 법정대리인의 동의를
              얻어야 합니다. 또한 연령에 따라 일부 서비스에 대하여 이용이 제한될 수 있습니다.
              <br />
              <br />
              제 5 조 (서비스 가입 및 계정)
              <br />
              1. 이용자는 회사가 제공하는 방식을 통해 서비스에 가입할 수 있습니다. <br />
              2. 회사는 서비스에 가입한 이용자에게 닉네임, 고유아이디가 포함된 계정을 제공합니다. <br />
              3. 회사는 계정 정보를 통해 미성년자 여부 확인 등의 이용자 관리업무를 수행합니다.
              <br />
              4. 이용자는 자신의 계정을 성실히 관리하여야 합니다. 이용자가 본인의 계정을 소홀히 관리하거나 제3자에게
              이용을 승낙함으로써 발생하는 손해에 대하여는 이용자에게 책임이 있습니다.
              <br />
              <br />
              제 7 조 (회사의 의무)
              <br />
              1. 회사는 관계 법령을 준수하고, 이 약관에서 정하는 권리의 행사와 의무의 이행을 신의에 따라 성실하게
              수행합니다. <br />
              2. 회사는 계속적이고 안정적인 서비스의 제공을 위하여 최선의 노력을 다합니다. <br />
              3. 회사는 이용자들이 서비스를 편리하게 이용할 수 있도록 최선의 노력을 다합니다. <br />
              4. 회사는 이용자가 제기한 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는 합리적인 기간 내에
              신속하게 처리하기 위해 노력합니다.
              <br />
              <br />
              제 8 조 (이용자의 의무) <br />
              1. 이용자는 서비스를 본래의 이용 목적 이외의 용도로 사용하거나 다음 각 호에 해당하는 행위를 해서는 안되며,
              아래의 항을 위반하는 것으로 의심되는 이용자를 발견할 시 이메일, ‘신고하기’ 등을 통해 신고를 접수하여야
              합니다. 1) 다른 이용자의 계정 혹은 타인의 결제 정보를 도용하거나 회사의 관리자를 사칭하는 행위 2) 서비스
              이용 중 허위 사실을 기재하여 서비스 운영을 방해하는 행위 3) 회사가 제공한 계정을 타인에게 양도하는 행위 4)
              회사의 서비스를 이용하여 얻은 정보를 회사의 사전 승낙없이 복제, 유통하여 상업적으로 이용하는 행위 5)
              사기성, 음란성, 사행성, 혐오성 메시지 혹은 음성 등이 담긴 콘텐츠를 방송하거나 게시하는 행위 6) 타인의
              명예를 훼손하거나 사이버 불링, 폭력적인 행위를 하는 등 이용자의 정상적인 서비스 이용을 방해하는 행위 7)
              저작권을 포함한 지적재산권, 초상권 등 회사 및 제 3자의 기타 권리를 침해하는 행위 8) 타인의 개인정보를
              동의없이 수집, 저장, 유포, 게시하는 행위 9) 일반적이지 않은 방식으로 데이터를 조작하여 회사의 서비스
              운영을 방해하는 행위 10) 컴퓨터 소프트웨어, 하드웨어, 전기 통신 장비의 정상적인 가동을 방해, 파괴할
              목적으로 고안된 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 전송,
              게시, 유포, 사용하는 행위 11) 서버 해킹, 데이터 유출, 버그 등을 통해 서비스를 변경하거나 회사가 정하지
              않은 방식으로 서비스를 이용하는 행위 12) 관계 법령, 서비스이용약관, 운영정책, 공지사항을 위배하는 행위 13)
              기타 공공질서 및 미풍양속을 위반하거나 불법적, 부당한 방식의 행동을 하는 행위
              <br />
              2. 회사는 이용자가 제 1항에 정한 서비스 이용 제한 기준을 위반하여 회사의 서비스에 지장을 초래한 경우, 사전
              통보 없이 기간을 정하여 서비스 이용을 제한할 수 있습니다. 3. 회사는 이용자의 이용 제한이 정당한 경우 이로
              인하여 이용자가 입은 손해에 대해 배상하지 않습니다. <br />
              <br />
              제 9 조 (게시물에 대한 저작권) <br />
              1. 이용자가 서비스 내에 게시한 콘텐츠의 저작권은 이용자 본인에게 있습니다. <br />
              2. 서비스 이용 시 다른 이용자 또는 제 3자의 저작권 등 기타 권리를 침해하는 행위는 금지됩니다. 서비스 이용
              중 저작권과 관련하여 발생하는 분쟁에 대한 모든 책임은 이용자에게 있습니다. <br />
              3. 회사는 이용자가 게시한 콘텐츠를 국내외에서 제공하는 관련 서비스(홍보 등) 목적으로 사용할 수 있습니다.{' '}
              <br />
              4. 제 3항의 사용범위는 이용자가 서비스 내에 게시한 콘텐츠의 복제, 수정, 전시, 전송, 배포, 출판 및 2차
              저작물과 편집 저작물 작성을 포함합니다. 5. 이용자가 게시한 콘텐츠를 상업적 혹은 제 3항에서 정하지 않은
              방식으로 사용할 경우, 회사는 전화, 팩스, 전자 우편 등의 방식으로 이용자에게 동의를 얻을 수 있으며, 별도의
              보상을 할 수 있습니다.
              <br />
              <br />
              제 10 조 (서비스의 제공 시간 및 중지, 변경)
              <br />
              1. 회사는 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간 서비스를 제공합니다. <br />
              2. 회사는 시스템 정기점검 등 서비스 운영상 필요한 경우, 일정기간 동안 서비스를 일시 중지시킬 수 있으며,
              이러한 경우 회사는 그 내용 및 시간을 서비스 내에 공지합니다. 다만, 회사가 사전에 통지할 수 없는 부득이한
              사유가 있는 경우 사후에 통지할 수 있습니다. <br />
              3. 회사는 새로운 서비스, 각종 버그 패치 등 서비스 운영 또는 기술상 필요한 경우에는 제공하고 있는 서비스의
              전부 또는 일부를 수정, 추가, 폐지 등 변경할 수 있습니다. 변경될 서비스의 내용 및 일자 등에 대해서는 서비스
              내에 공지함으로써 이용자에 대한 통지를 대체합니다. <br />
              4. 회사는 서비스의 기획이나 운영상 또는 회사의 긴박한 상황 등에 의해 서비스 전부를 중단할 필요가 있는 경우
              서비스 내에 이를 공지하고 서비스의 제공을 중단할 수 있습니다. 단, 회사가 통제할 수 없는 사유로 인한 경우
              공지없이 서비스가 중단될 수 있습니다.
              <br />
              <br />
              제 11 조 (광고의 게재)
              <br />
              회사는 본 서비스를 유지하기 위하여 서비스 내에 광고를 게재할 수 있습니다. 서비스에 게재되는 제3자가 주체인
              광고에 이용자가 참여하거나 거래함으로써 발생하는 손실과 손해에 대해서 회사는 어떠한 책임도 부담하지
              않습니다.
              <br />
              <br />
              제 12 조 (계약 해지)
              <br />
              이용자는 서비스 이용을 원하지 않는 경우, 회원탈퇴를 통하여 언제든지 이용 계약을 해지할 수 있으며 탈퇴 신청
              이후에는 탈퇴 취소 및 탈퇴한 계정에 대해 복구할 수 없습니다. 이용자의 탈퇴 신청 7일 후 계정 탈퇴 및 개인
              정보 삭제가 완료됩니다. 이용자는 계정 탈퇴 완료 이후에 서비스에 재가입이 가능합니다.
            </div>
          </main>
          <footer>
            <button type="button" className={style.closeBtn} onClick={onClose}>
              {' '}
              확인{' '}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}

export default AccountPolicy;
