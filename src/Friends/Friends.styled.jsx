import styled from "@emotion/styled";

export const FriendsUl = styled.ul`
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
`
export const FriendsLi = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 400px;
    height: 120px;
    margin-bottom: 10px;
    border-radius: 2%;
    border: 1px solid rgb(230, 228, 223);
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
                rgb(0 0 0 / 14%) 0px 3px 4px 0px,
                rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: 50px;
  margin-left: 9px;
  
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'grey';
    }
  }};
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 1px solid rgb(230, 228, 223);
    border-radius: 5%;
    background-color: rgb(230, 228, 223);
`

export const Name = styled.p`
    margin: 25px 10px 25px 10px ;
`