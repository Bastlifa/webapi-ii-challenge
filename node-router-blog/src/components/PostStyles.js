import styled from 'styled-components'

export const PostSmallDiv = styled.div`
    margin: 10px auto;
    height: auto;
    width: 550px;
    background-color: lightgray;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
`;

export const PostsFlex = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

export const TimeStampP = styled.p`
    font-size: 10px;
    /* position: absolute; */
    line-height: 11px;
    margin-right: 5px;
`;

export const PostLargeDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: auto;
    margin: 20px 20px;
    background-color: lightgray;
    border: 10px solid black;
    border-radius: 12px;
`;

export const CommentDiv = styled.div`
    background-color: white;
    margin: 20px 20px;
    border: 1px solid black;
`;

export const ModalDiv = styled.div`
    width: 600px;
    height: 200px;
    background-color: white;
    border: 2px solid black;
    border-radius: 6px;
`;