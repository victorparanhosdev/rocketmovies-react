import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled(Link)`

  color: ${({theme})=> theme.COLORS.ROSE};
  font-weight: 400;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 0.8rem;
  }
`;