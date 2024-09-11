'use client';
import MobileAppDev from '@/components/mobileAppDevelopment/mobileAppDev';
import * as S from './styles';
import Image from 'next/image';

export default function MobileAppWeb(){
    return(
        <S.Container>
            <MobileAppDev/>
        </S.Container>
    )
}