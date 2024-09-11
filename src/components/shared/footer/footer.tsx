"use client"
import * as S from "./styles";

export function Footer() {
    return (
        <S.Container>
            <S.SpanContainer>
                <S.Brand>Lucas Technology Services</S.Brand>
                <S.Copyright>All rights reserved</S.Copyright>
            </S.SpanContainer>
            <S.SocialsContainer>
                <S.Socials href="https://www.linkedin.com/company/71696971/admin/" target="_blank">
                    <S.LinkedinIcon className="linkedin-icon" />
                </S.Socials>
                <S.Socials href="https://github.com/Lucas-Technology-Services" target="_blank">
                    <S.GithubIcon className="github-icon" />
                </S.Socials>
            </S.SocialsContainer>
        </S.Container>
    )
}
