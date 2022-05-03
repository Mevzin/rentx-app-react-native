import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, TotalCars, HeaderContent } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";

export function Home() {
  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent : {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png'
  }

  const carDataTwo = {
    brand: 'Porshe',
    name: 'Panamera',
    rent : {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://www.mazettoseguros.com.br/blog/wp-content/uploads/2019/10/seguro-panamera-corretora-de-seguros-700x350.png'
  }

  const carDataThree = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent : {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png'
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carDataOne} />
      <Car data={carDataTwo} />
      <Car data={carDataThree} />
    </Container>
  );
}
