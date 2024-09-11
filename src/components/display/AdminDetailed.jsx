import { useRef, useState } from 'react';
import styled from 'styled-components';

import { Span, Text } from '../typograph/Text';
import { Button } from '../forms/Button';

import { ColorProfile } from './ColorProfile';

import { GenerateColorByString } from '../../utils/generateColor';
import { formatDate } from '../../utils/formatDate';
import { HintedInput } from '../forms/HintedInput';

import { HoverToReveal } from './HoverToReveal';
import { Input } from '../forms/Input';

import useConfirm from '../../stores/useConfirm';
import useAlert from '../../stores/useAlert';
import useLoading from '../../stores/useLoading';
import { API } from '../../utils/api';

const AdminDetailedWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;

  & > button {
    position: absolute;
    margin: 5px;
    left: 30px;
    bottom: 30px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;

const Name = styled(Span).attrs({
  $size: 'l',
  $weight: 'extrabold',
})`
  margin-bottom: 8px;
`;

const CreatedAt_UpdatedAt = ({ raw_created_at, raw_updated_at }) => {
  return (
    <Text size="s" color="--secondary-text-color">
      <b>등록</b> {formatDate(raw_created_at)}ㆍ<b>수정</b>{' '}
      {formatDate(raw_updated_at)}
    </Text>
  );
};

const DeleteAdmin = ({ admin, id_confirm_ref }) => {
  const profile_color = GenerateColorByString(
    admin.student_id,
    admin.generation,
    admin.role,
    admin.description,
  );

  return (
    <>
      <Profile>
        <ColorProfile width="84px" height="84px" color={profile_color} />
        <div>
          <Name>{admin.role}</Name>
          <CreatedAt_UpdatedAt
            raw_created_at={admin.created_at}
            raw_updated_at={admin.updated_at}
          />
        </div>
      </Profile>
      <div
        style={{
          marginTop: '20px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text size="s" color="--warning-color">
          위 관리자를 삭제하려면 학번을 입력하세요.
        </Text>
        <HoverToReveal>
          <Text size="s">{admin.student_id}</Text>
        </HoverToReveal>
      </div>
      <Input
        ref={id_confirm_ref}
        type="number"
        label=""
        placeholder="2024xxxxxx"
      />
    </>
  );
};

export const AdminDetailed = ({ admin, refs }) => {
  const { openConfirm, closeConfirm } = useConfirm();
  const { openAlert, closeAlert } = useAlert();
  const { showLoading, hideLoading } = useLoading();

  const [studentID, setStudentID] = useState(admin.student_id);
  const [generation, setGeneration] = useState(admin.generation);
  const [role, setRole] = useState(admin.role);
  const [description, setDescription] = useState(admin.description);

  const { id_ref, generation_ref, role_ref, description_ref } = refs;

  const id_confirm_ref = useRef();

  const profile_color = GenerateColorByString(
    studentID,
    generation,
    role,
    description,
  );

  const onClick = () => {
    openConfirm({
      title: '관리자 삭제',
      content: <DeleteAdmin admin={admin} id_confirm_ref={id_confirm_ref} />,
      onConfirm: () => {
        deleteAdmin();
      },
      onCancel: () => closeConfirm(),
      confirm_label: '삭제',
      confirm_color: 'var(--danger-color)',
      cancel_label: '취소',
    });
  };

  const deleteAdmin = () => {
    if (id_confirm_ref.current.value != admin.student_id.toString()) {
      openAlert({
        title: '학번 불일치',
        content: <Text>삭제하려는 관리자의 학번을 일치하게 적어주세요.</Text>,
        onClose: () => closeAlert(),
      });
    } else {
      closeConfirm();
      showLoading({});
      API.DELETE(`/admin/${admin.student_id}`).then(() => {
        hideLoading();
        openAlert({
          title: '관리자 삭제 완료',
          content: (
            <Text>관리자 목록에서 {admin.student_id}를 삭제했어요.</Text>
          ),
          onClose: () => window.location.reload(),
        });
      });
    }
  };

  return (
    <AdminDetailedWrapper>
      <Profile>
        <ColorProfile width="84px" height="84px" color={profile_color} />
        <div>
          <Name>{role}</Name>
          <CreatedAt_UpdatedAt
            raw_created_at={admin.created_at}
            raw_updated_at={admin.updated_at}
          />
        </div>
      </Profile>
      <div>
        <div style={{ display: 'flex' }}>
          <HintedInput
            ref={id_ref}
            label="학번"
            type="number"
            readOnly
            defaultValue={admin.student_id}
            onChange={(e) => {
              setStudentID(e.target.value);
            }}
          />
          <HintedInput
            ref={generation_ref}
            label="동아리 가입"
            defaultValue={admin.generation}
            onChange={(e) => {
              setGeneration(e.target.value);
            }}
          />
        </div>
        <HintedInput
          ref={role_ref}
          label="관리 직책"
          defaultValue={admin.role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <HintedInput
          ref={description_ref}
          label="설명"
          defaultValue={admin.description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <Button
        onClick={onClick}
        type="outline"
        color="--danger-color"
        text_color="--danger-color"
      >
        삭제
      </Button>
    </AdminDetailedWrapper>
  );
};
