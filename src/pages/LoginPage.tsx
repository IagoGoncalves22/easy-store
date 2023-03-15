import {
    Card,
    Text,
    Button,
    PasswordField,
    TextField,
    Form,
    Link,
    Stack
} from '@7shifts/sous-chef';
import './LoginPage.scss';
import imageToAdd from '../assets/login.svg';
const LoginPage = () => {
    return (
        <div className="container">
            <div className="login-page">
                <div className="login-card">
                    <Card>
                        <Form>
                            <TextField
                                name="login-email"
                                label="Email"
                                placeholder="Type your better email"
                            />
                            <PasswordField
                                name="password"
                                label="Password"
                                placeholder="Type your password"
                            />
                            <Link href="">Forgot passord?</Link>
                            <Button theme="primary" size="full-width">
                                Login
                            </Button>
                        </Form>
                    </Card>
                </div>
            </div>

            <div className="right-column">
                <img src={imageToAdd} alt="" />
                <Stack alignItems="center">
                    <Text as="insight">Manage your business</Text>
                    <Text color="#6d87dd" as="insight">
                        easier! 🎉
                    </Text>
                </Stack>
            </div>
        </div>
    );
};
export default LoginPage;
