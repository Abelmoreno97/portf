import { VStack, Heading, Text, HStack, Image, SimpleGrid} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import db from "../db";
function Labs() {
  return (
    <VStack w="1200px" position="relative" color="white">

      <Heading m="75px 0px">Labs component</Heading>;
      <Text w="350px">
        Proyectos aislados para prueba de tecnologias nuevas, pequeños y sin
        impacto pero valiosos en terminos de exploracion de codigo.
      </Text>
      <HStack m="50px 0px" justify="center">
      <SimpleGrid columns={2} spacing={10}>
      {db[2].map((db) => (
          <VStack
          justify="space-around"
            p="15px"
            bgColor="#0009b92a"
            h="450px"
            w="330px"
            transition=".5s ease"
            _hover={{
              backgroundColor: "#5b5e967e",
              borderRadius: "15px",
              cursor: "pointer",
              transform: "scale(1.2, 1.2)",
              opacity: "1",
              filter: "contrast(120%)",
            }}
          >
            <Heading>{db.name}</Heading>
            <Image objectFit="contain" borderRadius="10px" src={db.img} alt={db.name} w="300px" h="250px"/>
            <Text  m="10px" fontSize="18px" w="300px">
              {db.description}
            </Text>
          </VStack>
        ))}
        </SimpleGrid>
        </HStack>
    </VStack>
  );
}

export default Labs;
