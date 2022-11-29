import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from './src/services/api';


function Feed() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: "#d3d3d3" }}>
      <Image
        source={require('./assets/marcelle.png')}
        style={styles.imgProfile}
      />
      <Text style={styles.fontTextSubTitle}>Olá, eu sou</Text>
      <Text style={styles.fontTextTitle}>Marcelle Mascarenhas</Text>
      <Text style={styles.fontText}>Sou estudante do curso de Sistemas para Internet</Text>
      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/marcelle-mascarenhas')}>
          <Image
            source={require('./assets/github.png')}
            style={styles.imgIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/marcelle-mascarenhas/')}>
          <Image
            source={require('./assets/linkedin.png')}
            style={styles.imgIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://marcellemascarenhas.netlify.app/')}>
          <Image
            source={require('./assets/rede.png')}
            style={styles.imgIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:marcellebts@gmail.com')}>
          <Image
            source={require('./assets/email.png')}
            style={styles.imgIcons}
          />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

function Sobre() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.fontTextTitle}>Quem Sou</Text>
      <Text>_________________</Text>
      <View style={{ width: 370 }}>
        <Text style={styles.fontSobreMim}>
          Meu nome é Marcelle Mascarenhas, sou de Recife - PE. Atualmente sou estudante do curso de Sistemas para Internet - 4º período - da UNICAP (Universidade Católica de Pernambuco) e também atuo como estagiária de desenvolvimento back-end no CESAR. Mas curiosamente, essa não é minha primeira faculdade, também cursei Bacharelado em Química na UFPE.</Text>
        <Text style={styles.fontSobreMim}>Se você veio aqui conhecer meu trabalho, saiba que sou apaixonada pelo que faço e estou sempre tentando fazer melhor, porque sempre dá.</Text>
      </View>
      <TouchableOpacity style={styles.buttonCV} onPress={() => Linking.openURL('https://drive.google.com/file/d/1lCp8yIx6XCRTSjhj0y32vz-kcDu9pCcV/view?usp=share_link')}>
        <Text style={{ fontSize: 18, color: "#ffff", fontWeight: "bold" }}>Download CV</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Tecnologias() {
  const [tecnologias, setTecnologias] = React.useState([]);

  React.useEffect(() => {
    api.get("/tecnologias").then((response) => {
      setTecnologias(response.data);
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.fontTextTitle}>Tecnologias</Text>
      <Text>_________________</Text>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/react-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20 }}>{tecnologias[0]?.name}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/javascript-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20 }}>{tecnologias[1]?.name}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/nodejs-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20 }}>{tecnologias[2]?.name}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/python.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20 }}>{tecnologias[3]?.name}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/java-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20 }}>{tecnologias[6]?.name}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/html5-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20 }}>{tecnologias[4]?.name}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/css3-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20 }}>{tecnologias[5]?.name}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/react-original.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20 }}>{tecnologias[7]?.name}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/github.png')}
            style={styles.imgIcons}
          />
          <Text style={{ fontSize: 20, padding: 20 }}>{tecnologias[8]?.name}{" "}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Projetos() {
  const [projetos, setProjetos] = React.useState([]);

  React.useEffect(() => {
    api.get("/projetos").then((response) => {
      setProjetos(response.data);
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.fontTextTitle}>Projetos</Text>
      <Text>_________________</Text>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/marcelle-mascarenhas/site-monalisa')}>
            <Image
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20 }}>{projetos[0]?.title}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/marcelle-mascarenhas/site-ela-resolve')}>
            <Image
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20 }}>{projetos[14]?.title}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/marcelle-mascarenhas/residencia-squad-cesar')}>
            <Image
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20 }}>{projetos[1]?.title}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/marcelle-mascarenhas/codigo-morse')}>
            <Image
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20 }}>{projetos[2]?.title}{" "}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/marcelle-mascarenhas/portfolio')}>
            <Image
              source={require('./assets/github.png')}
              style={styles.imgIcons}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, padding: 20 }}>{projetos[3]?.title}{" "}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"

      screenOptions={{
        tabBarActiveTintColor: '#7200e1',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Quem Sou"
        component={Sobre}
        options={{
          tabBarLabel: 'Quem Sou',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tecnologias"
        component={Tecnologias}
        options={{
          tabBarLabel: 'Tecnologias',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="database" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Projetos"
        component={Projetos}
        options={{
          tabBarLabel: 'Projetos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="billboard" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  imgProfile: {
    marginTop: 10,
    width: 330,
    height: 320,
    borderRadius: 300,
  },
  imgIcons: {
    marginTop: 15,
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  fontTextSubTitle: {
    marginTop: 15,
    fontSize: 30,
    color: "#1C1C1C",
    textAlign: "justify",
    fontWeight: "300"
  },
  fontTextTitle: {
    marginTop: 15,
    fontSize: 30,
    color: "#7200e1",
    textAlign: "justify",
    fontWeight: "400",
  },
  fontText: {
    marginTop: 15,
    fontSize: 15,
    color: "#1C1C1C",
    textAlign: "justify"
  },
  fontSobreMim: {
    marginTop: 10,
    fontSize: 18,
    color: "#363636",
    textAlignVertical: "center",
    textAlign: "justify"
  },
  buttonCV: {
    marginTop: 17,
    padding: 10,
    width: "35%",
    borderRadius: 50,
    backgroundColor: "#7200e1",
    alignItems: "center"
  },
  scrollView: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
})

export default function App() {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}