import styled from "@emotion/styled";

export const ProfileList = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid rgb(230, 228, 223);
    border-radius: 1%;
    padding-top: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Description = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const Avatar = styled.img`
    width: 120px;
  border-radius: 50%;
  border: 1px solid rgb(218, 218, 218);
  background-color: brown;
  margin-bottom: 20px;
`

export const Name = styled.p`
    font-weight: 600;
  font-size: 24px;
  font-family: 'Roboto';
`

export const Quantity = styled.span`
    font-weight: 600;
  font-size: 24px;
  font-family: 'Roboto';
`

export const Tag = styled.p`
    color: grey;
  font-weight: 300;
  font-size: 18px;
  font-family: 'Oxygen';
`

export const Location = styled.p`
    color: grey;
  font-weight: 300;
  font-size: 18px;
  font-family: 'Oxygen';
`

export const Stats = styled.ul`
    display: flex;
  background-color: rgb(227, 243, 243);
`

export const Stat = styled.li`
    display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(218, 218, 218);
  border-bottom: 0;
  width: 100%;
`

export const Label = styled.span`
    display: inline-block;
  color: grey;
  font-weight: 300;
  font-size: 18px;
  font-family: 'Oxygen';
  align-items: center;
`