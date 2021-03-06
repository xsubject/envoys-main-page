import React, { FC } from "react";
import pdfIco from "../../assets/images/sv.svg";
import LisingHeader from "./lisingHeader";
import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';
import useCompanies from '../../hooks/useCompanies';

const Wrapper = styled.div`
  max-width: 959px;
  border: 1px solid #e8e8ea;
  border-radius: 13px;
  background: white;
  margin-bottom: 21px;
`;

const Heading = styled.div`
  padding: 23px 0 19px 25px;
  background: #f9f9f9;
  width: 100%;
  border-radius: 13px 13px 0 0;
  margin-bottom: 9px;
  box-sizing: border-box;
`;

const HeadingTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  /* Dark clear */

  color: #0f2b46;
`;

const BanksWrapper = styled.div`
  width: 100%;
  padding: 0 46px 22px 22px;
  background: white;
  border-radius: 0 0 13px 13px;
  box-sizing: border-box;
  @media (max-width: 806px) {
    display: none;
  }
`;
const BankName = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-decoration-line: underline;
  color: #045599;
  position: relative;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 139px;
  @media (max-width: 806px) {
    width: 197px;
  }
`;

const Header = styled.div`
  max-width: 959px;
  background: transparent;
  padding: 18px 0 18px 68px;
`;

const BankItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 7px 0;
  position: relative;
  &:last-child {
    &:after {
      display: none;
    }
  }
  &:after {
    position: absolute;
    content: "";
    background: #133d65;
    height: 2px;
    border-radius: 4px;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0.05;
    &:last-child {
      background: #000;
    }
  }
`;

const PriceItems = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #133d65;
  width: 89px;
  text-align: end;
  &:nth-child(3) {
    text-align: end;
  }
`;

const Border = styled.div`
  border: 1px solid #f9f9f9;
  border-radius: 13px;
`;

const ResponsiveBankWrapper = styled.div`
  border: 1px solid #e8e8ea;
  border-radius: 13px;
  background: white;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 22px;
  display: none;
  @media (max-width: 806px) {
    display: flex;
    justify-content: center;
    border: none;
  }
`;
// responsive bank - RB

const RBItem = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #e8e8ea;
  border-radius: 13px;
  margin-bottom: 10px;
  @media (max-width: 380px) {
    width: 300px;
  }
`;
const RBHeaderItem = styled.span`
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */
  color: rgba(19, 61, 101, 0.7);
  max-width: 113px;
  text-decoration: none;
  padding-right: 10px;
`;

const RBPriceItems = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #133d65;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Listing: FC = () => {
  const headerItem = [
    "????????????",
    "????????????",
    "???????????? ?????????????????? ????????????,com",
    "?????????????????????????? ??????,com",
    "??????-???? ????",
    "????????????",
  ];
  const categoryB = useCompanies("b");
  const categoryC = useCompanies("c");
 
  return (
    <>
      <LisingHeader headerItem={headerItem} />
      <Wrapper>
        <Heading>
          <HeadingTitle>
            ??????????????????{" "}
            <span style={{ color: "#F48020", marginLeft: "10px" }}> B</span>
          </HeadingTitle>
        </Heading>
        <BanksWrapper>
          {categoryB.map((el, idx) => (
            <BankItem>
              <BankName to="/allinfo">{el.name}</BankName>
              <PriceItems>{el.paper}</PriceItems>
              <PriceItems>{el.lastPrice}</PriceItems>
              <PriceItems>{el.capitalization}</PriceItems>
              <PriceItems>{el.quantity}</PriceItems>
              <img src={el.sv} alt="" />
            </BankItem>
          ))}
        </BanksWrapper>
        {/*//responsive block ???????????????? ???????????????? ???????? ?????? ?????????????????? ???????????????????? ????????????//*/}
        <ResponsiveBankWrapper>
          {categoryB.map((el, idx) => (
            <RBItem>
              <BankName to="/allinfo">
                <RBHeaderItem>{headerItem[0]}:</RBHeaderItem> {el.name}
              </BankName>
              <RBPriceItems>
                <RBHeaderItem>{headerItem[1]}:</RBHeaderItem> {el.paper}
              </RBPriceItems>
              <RBPriceItems>
                <RBHeaderItem>{headerItem[2]}:</RBHeaderItem> {el.lastPrice}
              </RBPriceItems>
              <RBPriceItems>
                <RBHeaderItem>{headerItem[3]}:</RBHeaderItem>{" "}
                {el.capitalization}
              </RBPriceItems>
              <RBPriceItems>
                <RBHeaderItem>{headerItem[4]}:</RBHeaderItem> {el.quantity}
              </RBPriceItems>
              <RBPriceItems>
                <RBHeaderItem>{headerItem[5]}</RBHeaderItem>
              </RBPriceItems>
            </RBItem>
          ))}
        </ResponsiveBankWrapper>
      </Wrapper>

      <Wrapper>
        <Heading>
          <HeadingTitle>
            ??????????????????{" "}
            <span style={{ color: "#F48020", marginLeft: "10px" }}>C</span>
          </HeadingTitle>
        </Heading>
        <BanksWrapper>
          {categoryC.map((el, idx) => (
            <BankItem>
              <BankName to="/allinfo">{el.name}</BankName>
              <PriceItems>{el.paper}</PriceItems>
              <PriceItems>{el.lastPrice}</PriceItems>
              <PriceItems>{el.capitalization}</PriceItems>
              <PriceItems>{el.quantity}</PriceItems>
              <img src={el.sv} alt="" />
            </BankItem>
          ))}
        </BanksWrapper>
        <ResponsiveBankWrapper>
          {categoryB.map((el, idx) => (
            <RBItem>
              <BankName to="/allinfo">
                <RBHeaderItem>{headerItem[0]}:</RBHeaderItem> {el.name}
              </BankName>
              <RBPriceItems>
                <RBHeaderItem>{headerItem[1]}:</RBHeaderItem> {el.paper}
              </RBPriceItems>
              <RBPriceItems>
                <RBHeaderItem>{headerItem[2]}:</RBHeaderItem> {el.lastPrice}
              </RBPriceItems>
              <RBPriceItems>
                <RBHeaderItem>{headerItem[3]}:</RBHeaderItem>{" "}
                {el.capitalization}
              </RBPriceItems>
              <RBPriceItems>
                <RBHeaderItem>{headerItem[4]}:</RBHeaderItem> {el.quantity}
              </RBPriceItems>
              <RBPriceItems>
                <RBHeaderItem>{headerItem[5]}</RBHeaderItem>
              </RBPriceItems>
            </RBItem>
          ))}
        </ResponsiveBankWrapper>
      </Wrapper>
    </>
  );
};

export default Listing;
