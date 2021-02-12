import styled from "styled-components";

const StyledPhoto = styled.div`
  height: 25vh;
  background: url(${(props) => props.image}) center/cover no-repeat;
  object-fit: cover;
  position: relative;
`;

const StyledPhotoView = styled.div`
  height: 73vh;
  background: url(${(props) => props.image}) center/cover no-repeat;
  object-fit: cover;
  position: relative;
`;

const RoundedStyledPhoto = styled.div`
  height: 290px;
  max-width: 290px;
  width: 100%;
  border-radius: 50%;
  background: url(${(props) => props.image}) center/cover no-repeat;
  object-fit: cover;
  position: relative;
`;
const StyledPhotoView1 = styled.div`
  height: 370px;
  width: 100%;
  border-radius: 10px;
  background: url(${(props) => props.image}) center/cover no-repeat;
  object-fit: cover;
  position: relative;
`;

export { StyledPhoto, StyledPhotoView, RoundedStyledPhoto, StyledPhotoView1 };
