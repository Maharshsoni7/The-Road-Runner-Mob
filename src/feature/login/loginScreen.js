import { Image, TouchableWithoutFeedback, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MainView from "../../components/view/MainView";
import Images from "../../utility/images";
import styles from "./styles";
import { Button, Icon, Input, Text } from '@ui-kitten/components';


const LoginScreen = () => {
    const GoogleIcon = (props) => (
        <Icon name='google' {...props} />
    );
    return (
        <View style={styles.container}>
            <View style={styles.imageSubContainer}>
                <Image source={Images.sapiens} style={{ height: 260, width: 300 }} resizeMode='center' />
                <Text style={{ marginBottom: 20, alignSelf: 'center', fontWeight: 'bold' }}>Welcome to Road-Runner</Text>
            </View>
            <View style={styles.inputView} >
                <View style={{ marginBottom: 20 }}>
                    <Input
                        label={'Email'}
                        placeholder="Enter Your Email Id"
                        textStyle={styles.inputText}
                        multiline={true}

                    />
                </View>
                <View>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder="Enter your Password"
                        accessoryRight={<Icon name={'eye'} />}

                        textStyle={styles.inputText}
                    />
                </View>
                <Text style={{ paddingTop: 10, alignSelf: 'flex-end', fontWeight: 'bold' }}>Forgot Password</Text>
                <Button style={{ marginVertical: 20 }}
                    status='basic'
                >
                    LOGIN
                </Button>

                <View >
                    <Text status='basic' style={{ alignSelf: 'center', marginVertical: 20, color: 'gray' }}> ────────  OR  ────────</Text>
                    <Button filled status='basic' accessoryLeft={GoogleIcon} >Sing In With Google</Button>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, alignSelf: 'center', }}>
                    <Text style={{ color: 'gray' }}> Don't Have Account ? </Text>
                    <Text style={{ fontWeight: 'bold' }}>Sin up</Text>
                </View>
            </View>
        </View >
    );
}

export default LoginScreen;