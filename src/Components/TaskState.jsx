import React from "react";
import { Card } from "./Card";
import styled from "styled-components";

const StatContainer = styled.div`
  flex: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 11px;

  text-transform: uppercase;
`;
const Stat = ({ label, value }) => {
  return (
    <StatContainer>
      <StatValue>{value}</StatValue>
      <StatLabel>{label}</StatLabel>
    </StatContainer>
  );
};

const Divider = styled.div`
  background: #ccc;
  width: 1px;
  height: 42px;
  margin: 0px 24px;
  opacity: 0.3;
`;

const Container = styled(Card)`
  padding-top: 15px;
  display: flex;
  padding-bottom: 15px;
  margin-bottom: 20px;
  overflow-y: unset;
`;

export const Stats = () => {
  return (
    <Container>
      <Stat label="Tasks Complete" value="1" />
      <Divider />
      <Stat label="Tasks Remaining" value="3" />
    </Container>
  );
};