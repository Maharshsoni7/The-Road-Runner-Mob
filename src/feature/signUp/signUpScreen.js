import { View, Image } from "react-native";
import styles from "./styles";
import Images from "../../utility/images";
import { Button, Icon, Input, Text } from '@ui-kitten/components';
import { renderIcon } from "../../utility/utils";

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageSubContainer}>
                <Image source={Images.signUp} style={{ height: 260, width: 300 }} resizeMode='center' />
                <Text style={{
                    fontSize: 18, fontWeight: 'bold'
                }}>Sing up</Text>
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
                <Button style={{ marginVertical: 20 }}
                    status='basic'
                >
                    Sing up
                </Button>
                <View style={{ flexDirection: 'row', paddingTop: 20, alignItems: "baseline", alignSelf: 'center', }}>
                    <Text style={{ color: 'gray' }}>  Joined us before? </Text>
                    <Text onPress={() => { context.onPressSingUp() }} style={{ fontWeight: 'bold' }}>Login</Text>
                </View>

            </View>
        </View >
    );
}

export default SignUpScreen;