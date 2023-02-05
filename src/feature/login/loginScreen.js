import { Image, View } from "react-native";
import Images from "../../utility/images";
import styles from "./styles";
import { Button, Icon, Input, Text } from '@ui-kitten/components';
import { renderIcon } from "../../utility/utils";


const LoginScreen = (props) => {
    const { context } = props
    return (
        <View style={styles.container}>
            <Button onPress={() => { context.OnPressSkip() }} accessoryRight={renderIcon('arrowhead-right-outline')} style={{ alignSelf: 'flex-end', marginRight: 10 }}
                status='basic'
                size="small"
            >
                Skip
            </Button>
            <View style={styles.imageSubContainer}>
                <Image source={Images.sapiens} style={{ height: 260, width: 300 }} resizeMode='center' />
                <Text style={{
                    fontSize: 18, fontWeight: 'bold'
                }}>Login</Text>
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
                <Button style={{ marginVertical: 10 }}
                    status='basic'
                >
                    LOGIN
                </Button>

                <View >
                    <Text status='basic' style={{ alignSelf: 'center', marginVertical: 20, color: 'gray' }}> ────────  OR  ────────</Text>
                    <Button filled status='basic' accessoryLeft={renderIcon('google')} >Sing In With Google</Button>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, alignSelf: 'center', }}>
                    <Text style={{ color: 'gray' }}> Don't Have Account ? </Text>
                    <Text onPress={() => { context.onPressSingUp() }} style={{ fontWeight: 'bold' }}>Sin up</Text>
                </View>

            </View>
        </View >
    );
}

export default LoginScreen;