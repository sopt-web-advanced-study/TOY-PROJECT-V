'use client';

import { checkState, loginClick } from '@/recoil/atoms';
import { followList } from '@/types/types';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

export default function ListElement(props: followList) {
  const selectState = useRecoilValue(checkState);
  const loginClickState = useRecoilValue(loginClick);

  const { id, login, avatar_url, onClick } = props;

  return (
    <li className="flex h-[40px] w-full items-center gap-[10px] px-[44px]">
      {selectState ? (
        <i className="h-[15px] w-[15px] text-subTitle01">✔️</i>
      ) : (
        <div className="h-[15px] w-[15px]"></div>
      )}
      {loginClickState === login ? (
        <i className="h-[15px] w-[15px] text-subTitle01">✔️</i>
      ) : (
        <div className="h-[15px] w-[15px]"></div>
      )}
      <Image src={avatar_url} alt="팔로우리스트-프로필이미지" width={40} height={40} className="rounded-full" />
      <span onClick={onClick} className="text-title01">
        {login}
      </span>
    </li>
  );
}
