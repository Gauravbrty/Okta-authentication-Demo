import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

const ProfileMainContainer = styled.div`
  width: 100%;
  padding: 30px 15px;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  background-color: #f0f2f5;
`;

const ProfileElements = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const ImageColumn = styled.div`
  grid-column: span 4;
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #829fff;
  box-shadow: 0 0 20px rgba(74, 144, 226, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const InfoColumn = styled.div`
  grid-column: span 8;
`;

const Name = styled.h2`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 10px;
  color: #2c3e50;
`;

const Email = styled.p`
  color: #7f8c8d;
  font-size: 18px;
  margin-bottom: 20px;
`;

const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const InfoItem = styled.div`
  background-color: #ecf0f1;
  padding: 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e6e8;
  }
`;

const InfoLabel = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 5px;
`;

const InfoValue = styled.p`
  font-size: 16px;
  color: #34495e;
  font-weight: bold;
`;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <ProfileMainContainer>
        <ProfileElements>
          <ImageColumn>
            <ProfileImage src={user.picture} alt={user.name} />
          </ImageColumn>
          <InfoColumn>
            <Name>{user?.name}</Name>
            <Email>{user?.email}</Email>
            <AdditionalInfo>
              <InfoItem>
                <InfoLabel>Username</InfoLabel>
                <InfoValue>{user?.nickname || 'N/A'}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Last Update</InfoLabel>
                <InfoValue>{new Date(user?.updated_at).toLocaleDateString()}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Email Verified</InfoLabel>
                <InfoValue>{user?.email_verified ? 'Yes' : 'No'}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Locale</InfoLabel>
                <InfoValue>{user?.locale || 'N/A'}</InfoValue>
              </InfoItem>
            </AdditionalInfo>
          </InfoColumn>
        </ProfileElements>
      </ProfileMainContainer>
    )
  );
};

export default Profile;