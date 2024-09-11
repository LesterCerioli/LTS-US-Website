import * as S from "./styles";

interface ButtonProps {
  children: React.ReactNode;
}
export function Button({ children }: ButtonProps) {
  return <S.Button>{children}</S.Button>;
}
