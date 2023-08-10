import styled from "styled-components";

import { Link } from "react-router-dom"

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${( {theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 80px;

    > h1{
        padding-left: 110px;
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 24px;
        font-weight: 700;
    }

    > .UserInput{
        width: 630px;
        height: 56px;
    }

`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    padding-right: 110px;

    > img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > div{
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        line-height: 19px;
        align-items: end;

        span{
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong{
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`;